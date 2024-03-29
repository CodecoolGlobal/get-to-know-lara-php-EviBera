<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('mails', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_user_from')->nullable();
            $table->unsignedBigInteger('id_user_to')->nullable();
            $table->string('subject');
            $table->text('message');
            $table->boolean('is_read');
            $table->timestamp('sent')->nullable();
            $table->timestamps();
        });

        Schema::table('mails', function (Blueprint $table) {
            $table->foreign('id_user_from')->references('id')->on('users')->onDelete('set null');
            $table->foreign('id_user_to')->references('id')->on('users')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mails');
    }
};
