package com.text.todo.service;

import java.sql.Date;
import java.util.List;

import com.text.todo.domain.ContentVO;
import com.text.todo.domain.ContentDTO;

public interface todoService {
	
	public ContentDTO todoList();
	
	public void todoWrite(ContentVO vo);
}
