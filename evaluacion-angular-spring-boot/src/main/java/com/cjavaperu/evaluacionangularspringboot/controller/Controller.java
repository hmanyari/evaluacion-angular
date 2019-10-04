package com.cjavaperu.evaluacionangularspringboot.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cjavaperu.evaluacionangularspringboot.repository.*;

import com.cjavaperu.evaluacionangularspringboot.model.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="*")
public class Controller {

	@Autowired
	private DepartamentoRepository departamentoRepository;
	
	@Autowired
	private ProvinciaRepository provinciaRepository;
	
	@GetMapping("/departamentos")
	public List<Departamento> getDepartamentos() {
		return departamentoRepository.findAll();
	}
	
	@GetMapping("/departamentos/{id}")
	public List<Provincia> getProvincias(@PathVariable(value = "id") Long id) {
		Optional<Departamento> departamento = departamentoRepository.findById(id);
		if (departamento.isPresent())
			return departamento.get().getProvincias();
		else
			return new ArrayList<Provincia>();
	}

	@GetMapping("/provincias/{id}")
	public List<Distrito> getDistritos(@PathVariable(value = "id") Long id) {
		Optional<Provincia> provincia = provinciaRepository.findById(id);
		if (provincia.isPresent())
			return provincia.get().getDistritos();
		else
			return new ArrayList<Distrito>();
	}

}
