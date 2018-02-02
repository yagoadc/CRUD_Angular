<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Aluno;

class AlunoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    //retorna todos os alunos
    public function index()
    {
        return response()->json(['alunos' => Aluno::all()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    //cria um novo aluno
    public function store(Request $request)
    {
        $aluno = Aluno::create($request->all());

        return response()->json(['res' => 'Aluno criado com sucesso!', 'aluno' => $aluno]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    //edita um aluno
    public function update(Request $request, $id)
    {
        Aluno::find($id)->update($request->all());

        return response()->json(['res' => 'Aluno editado com sucesso!']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    //deleta um aluno
    public function destroy($id)
    {
        Aluno::destroy($id);

        return response()->json(['res' => 'Aluno apagado com sucesso!']);
    }
}
