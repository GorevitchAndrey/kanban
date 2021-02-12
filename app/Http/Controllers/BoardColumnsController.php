<?php

namespace App\Http\Controllers;

use App\Models\Card;
use App\Models\Column;
use Illuminate\Http\Request;

class BoardColumnsController extends Controller
{
    public function index(int $board_id)
    {
        $columns = Column::query()->where('board_id', $board_id)->with('cards')->get();

        return view('welcome', compact('columns'));
    }

    public function createColumn(Request $request)
    {
        $data = $this->validate($request, [
            'name' => 'required|string',
            'board_id' => 'required|integer'
        ]);

        $column = Column::query()->create($data);
        return response()->json($column);
    }
}
