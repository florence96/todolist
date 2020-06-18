package com.text.todo.domain;

import java.util.List;

import lombok.Data;

@Data
public class ContentDTO {
	private List<ContentVO> list;
	
	//디폴트 생성자가 없으면 에러가 뜬다
	private ContentDTO() {};
	
	public ContentDTO(List<ContentVO> list) {
		this.list = list;
	}
}
