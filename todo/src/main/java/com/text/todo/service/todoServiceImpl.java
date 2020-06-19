package com.text.todo.service;

import java.sql.Date;
import java.util.List;

import com.text.todo.domain.ContentVO;
import com.text.todo.domain.ContentDTO;
import com.text.todo.mapper.todoMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.Setter;
import lombok.extern.log4j.Log4j;

@Service
@Log4j
public class todoServiceImpl implements todoService{
	
	@Setter(onMethod_ = @Autowired)
	private todoMapper mapper;
	
	@Override
	public ContentDTO todoList() {
		
	return new ContentDTO(mapper.todoList());
	}
	
	@Override
	public void todoWrite(ContentVO vo) {
	mapper.todoWrite(vo);
	}

	@Override
	public void todoUpdate(ContentVO vo) {
		// TODO Auto-generated method stub
	mapper.todoUpdate(vo);
	}
}
