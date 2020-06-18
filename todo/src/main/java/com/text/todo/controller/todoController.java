package com.text.todo.controller;

import java.sql.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.text.todo.domain.ContentDTO;
import com.text.todo.service.todoService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

@RestController
@Controller
@AllArgsConstructor
@Log4j
public class todoController {
	
	private todoService service;
	//글 목록 가져오기
	@RequestMapping(value = "/todo", method = {RequestMethod.GET},
			produces = {MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE})
	public ResponseEntity<ContentDTO> todoList(HttpServletRequest req){
		
		
		//List의 형식으로 받아오므로 DTO에서 List 처리를 따로 해주었다. 기억할 것
	return new ResponseEntity<ContentDTO>(service.todoList(),HttpStatus.OK);
	}
	
//	//글 작성하기
//	@PostMapping(value = "/", consumes = "application/json", produces = {MediaType.TEXT_PLAIN_VALUE})
//	public ResponseEntity<String> todoWrite(@RequestBody ContentVO vo){
//		log.info("contentWrite Controller");
//		
//		service.todoWrite(vo);
//		return new ResponseEntity<>(HttpStatus.OK);
//	}
	
}
