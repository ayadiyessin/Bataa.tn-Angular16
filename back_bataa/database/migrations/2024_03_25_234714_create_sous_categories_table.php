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
        Schema::create('sous_categories', function (Blueprint $table) {
            $table->id();
            $table->string('nomscategorie');
            $table->integer('ArchiveSouscategorie')->default(0);
            // hethom zouz ll foreign key
            $table->unsignedBigInteger('categorieID'); // bech nzid chemp categorieID w type mte3ou unsignedBigInteger // 5ater hetha type mta id
            $table->foreign('categorieID') // nheb nraja3 categorieID cle trangee
            ->references('id') // ipointy al id
            ->on('categories') // al table  categories
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
        Schema::dropIfExists('sous_categories');
    }
};
