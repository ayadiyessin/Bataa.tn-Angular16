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
        Schema::create('photos', function (Blueprint $table) {
            $table->id();
            $table->string('lien_photo');
            $table->unsignedBigInteger('produitID'); // bech nzid chemp produitID w type mte3ou unsignedBigInteger // 5ater hetha type mta id
            $table->foreign('produitID') // nheb nraja3 produitID cle trangee
            ->references('id') // ipointy al id
            ->on('produits') // al table  categories
            ->onDelete('restrict')
            ->onUpdate('restrict'); // hethom zouz ll cascade
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('photos');
    }
};
