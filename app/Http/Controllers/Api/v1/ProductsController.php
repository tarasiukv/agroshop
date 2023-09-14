<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use App\Services\FileService;
use Illuminate\Support\Facades\DB;
use PharIo\Version\Exception;
use Symfony\Component\HttpFoundation\Response;
use Validator;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return ProductResource::collection(Product::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductRequest $request)
    {
        $data = $request->validated();
        $file = $request->img;

        DB::beginTransaction();
        try {
            $product = Product::create([
                'title' => $data['title'],
                'description' => $data['description'],
                'price' => $data['price'],
                'category_id' => $data['category_id'],
                'country' => $data['country'],
                'manufacturer' => $data['manufacturer'],
            ]);
            $file_path = FileService::store($file, $product);
            $product->file_path = $file_path;
            $product->save();
            DB::commit();
        } catch (Exception $e) {
            DB::rollBack();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product = Product::findOrFail($id);

        return $product;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProductRequest $request, Product $product)
    {
        $product->update($request->validated());

        return new ProductResource($product);
    }


    public function destroy(Product $product)
    {
        $product->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
