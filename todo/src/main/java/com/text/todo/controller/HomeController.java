package com.text.todo.controller;

import java.util.Locale;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import lombok.extern.log4j.Log4j;

/**
// * Handles requests for the application home page.
// */
@Controller
@Log4j
public class HomeController {
	
	@RequestMapping({"/", "/todo"})
	public String todo() {
		log.info("메인페이지");
		return "main";
	}
	
}
