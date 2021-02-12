<?php

namespace App\Http\Controllers;

use App\Models\Board;

class BoardsController extends Controller
{

    public function index ()
    {
        $boards = Board::all();

        return view('boards', compact('boards'));

    }
}
