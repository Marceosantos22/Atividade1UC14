package com.api.filmes.controller;

import java.util.ArrayList;
import java.util.List;
import com.api.filmes.model.Filme;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/filmes")
public class FilmeController {

    private List<Filme> filmes = new ArrayList<>();
    private int proximoId = 1;

    @PostMapping("")
    public Filme novoFilme(@RequestBody Filme filme) {

        filme.setId(proximoId++);
        filmes.add(filme);
        return filme;

    }

    @GetMapping("")
    public List<Filme> buscaFilme() {

        return filmes;

    }

    @GetMapping("{id}")
    public Filme buscaFilmePorId(@PathVariable int id) {

        for (Filme filme : filmes) {

            if (filme.getId() == id) {

                return filme;
            }

        }

        return null;
    }

    @PutMapping("{id}")
    public Filme atualizaFilme(@PathVariable int id, Filme filme) {

        for (int i = 0; i < filmes.size(); i++) {

            Filme fm = filmes.get(i);

            if (fm.getId() == id) {

                fm.setTitulo(filme.getTitulo());
                fm.setSinopse(filme.getSinopse());
                fm.setGenero(filme.getGenero());
                fm.setDataLançamento(filme.getDataLancamento());
                return fm;

            }

           
        }

        return null;
    }

    @DeleteMapping("{id}")
    public boolean deletaFilme(@PathVariable int id){

        for(int i = 0; i < filmes.size(); i++){

            Filme fm = filmes.get(i);
            if(fm.getId() == id){

                filmes.remove(i);

                return true;
            }

        }

        return false;
    }

}
