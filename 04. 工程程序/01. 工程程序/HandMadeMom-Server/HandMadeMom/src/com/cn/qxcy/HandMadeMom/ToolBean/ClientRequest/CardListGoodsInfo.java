package com.cn.qxcy.HandMadeMom.ToolBean.ClientRequest;

public class CardListGoodsInfo extends GoodsInfo{
	private Integer goodsBuyNum;
	private String goodsImgUrl;
	private boolean goodsSelect;
	
	public CardListGoodsInfo(String goodsTitle, String goodsSpec, Integer goodsFreightPrice, Integer goodsRemainNum,
			double goodsPrice, String goodsDetailsText, String goodsTotorialText) {
		super(goodsTitle, goodsSpec, goodsFreightPrice, goodsRemainNum, goodsPrice, goodsDetailsText, goodsTotorialText);
		
		this.goodsBuyNum = 0;
		this.goodsImgUrl = "";
		this.goodsSelect = false;
	}

	public Integer getGoodsBuyNum() {
		return goodsBuyNum;
	}

	public void setGoodsBuyNum(Integer goodsBuyNum) {
		this.goodsBuyNum = goodsBuyNum;
	}

	public String getGoodsImgUrl() {
		return goodsImgUrl;
	}

	public void setGoodsImgUrl(String goodsImgUrl) {
		this.goodsImgUrl = goodsImgUrl;
	}

	public boolean isGoodsSelect() {
		return goodsSelect;
	}

	public void setGoodsSelect(boolean goodsSelect) {
		this.goodsSelect = goodsSelect;
	}
	

}
