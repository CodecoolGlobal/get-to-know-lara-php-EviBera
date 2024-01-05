<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Mail;
use Illuminate\Support\Facades\Auth;


class MailController extends Controller
{
    /**
     * Display a listing of incoming mails.
     * !!!! id_user_to === logged-in user's !!!!
     */
    public function inbox()
    {
        if(Auth::user()){
            $mails = Mail::query()->where(['id_user_to' => Auth::user()->id])->orderBy('created_at', 'desc')->get();
            return response()->json($mails);
        }
        throw new \Exception("There is no logged-in user");

    }

    /**
     * Display a listing of outgoing mails.
     * !!!! id_user_from === logged-in user's !!!!
     */
    public function getOutgoingMail()
    {
        return Mail::query()->where(['id_user_from' => 1])->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function send(Request $request): \Illuminate\Http\JsonResponse
    {
        $request->validate([
            'id_user_to' => 'required|exists:users,id',
            'subject' => 'required|string',
            'message' => 'required|string',
        ]);

        $mail = new Mail([
            'id_user_from' => $request->user()->id,
            'id_user_to' => $request->input('id_user_to'),
            'subject' => $request->input('subject'),
            'message' => $request->input('message'),
            'is_read' => false,
            'sent' => now(),
        ]);

        $mail->save();

        return response()->json(['message' => 'Mail sent successfully']);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Mail::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $mail = Mail::find($id);
        $mail->update($request->all());
        return $mail;

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
