package com.cn.qxcy.HandMadeMom.ToolBean.ClientRequest;

public class RecommendListItem {
	private Integer goodsId;
	private Integer goodsNum;
	private String goodsSpec;
	private String goodsTitle;
	private String goodsImgUrl;
	private double goodsPrice;
	
	public RecommendListItem(Integer goodsId, Integer goodsNum, String goodsSpec, String goodsTitle, String goodsImgUrl, double goodsPrice) {
		this.goodsId = goodsId;
		this.goodsNum = goodsNum;
		this.goodsSpec = goodsSpec;
		this.goodsTitle = goodsTitle;
		this.goodsImgUrl = goodsImgUrl;
		this.goodsPrice = goodsPrice;
	}
	
	public Integer getGoodsId() {
		return goodsId;
	}
	public void setGoodsId(Integer goodsId) {
		this.goodsId = goodsId;
	}
	public Integer getGoodsNum() {
		return goodsNum;
	}
	public void setGoodsNum(Integer goodsNum) {
		this.goodsNum = goodsNum;
	}
	public String getGoodsSpec() {
		return goodsSpec;
	}
	public void setGoodsSpec(String goodsSpec) {
		this.goodsSpec = goodsSpec;
	}
	public String getGoodsTitle() {
		return goodsTitle;
	}
	public void setGoodsTitle(String goodsTitle) {
		this.goodsTitle = goodsTitle;
	}
	public String getGoodsImgUrl() {
		return goodsImgUrl;
	}
	public void setGoodsImgUrl(String goodsImgUrl) {
		this.goodsImgUrl = goodsImgUrl;
	}
	public double getGoodsPrice() {
		return goodsPrice;
	}
	public void setGoodsPrice(double goodsPrice) {
		this.goodsPrice = goodsPrice;
	}
	
	
}
