<?php

namespace App\Http\Controllers;

use App\Models\Card;
use Illuminate\Http\Request;

class BoardCardController extends Controller
{
    public function createCard (Request $request)
    {
        $data = $request->validate(
            [
                'column_id' => 'required|integer',
                'name' => 'required|string',
            ]
        );

        $card = Card::query()->create($data);
        return response()->json($card);
    }
}
