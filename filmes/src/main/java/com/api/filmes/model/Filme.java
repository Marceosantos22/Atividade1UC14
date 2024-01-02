package com.api.filmes.model;

import java.util.Date;

import org.springframework.stereotype.Component;

@Component
public class Filme {

    private int id;
    private String titulo;
    private String sinopse;
    private String genero;
    private Date dataLancamento;
    


    public Filme(){}


    public Filme(int id, String titulo, String sinopse, String genero, Date dataLancamento) {
        this.id = id;
        this.titulo = titulo;
        this.sinopse = sinopse;
        this.genero = genero;
        this.dataLancamento = dataLancamento;
    }


    public int getId() {
        return id;
    }


    public void setId(int id) {
        this.id = id;
    }


    public String getTitulo() {
        return titulo;
    }


    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }


    public String getSinopse() {
        return sinopse;
    }


    public void setSinopse(String sinopse) {
        this.sinopse = sinopse;
    }


    public String getGenero() {
        return genero;
    }


    public void setGenero(String genero) {
        this.genero = genero;
    }


    public Date getDataLancamento() {
        return dataLancamento;
    }


    public void setDataLançamento(Date dataLancamento) {
        this.dataLancamento = dataLancamento;
    }


}
