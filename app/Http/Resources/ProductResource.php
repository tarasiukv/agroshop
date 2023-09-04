<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'price' => $this->price,
            'status' => $this->status,
            'category_id' => $this->category_id,
            'created_at' => $this->created_at ? $this->created_at->format('d.m.Y, H:i') : null,
            'updated_at' => $this->updated_at ? $this->updated_at->format('d.m.Y, H:i') : null,
        ];
    }
}
