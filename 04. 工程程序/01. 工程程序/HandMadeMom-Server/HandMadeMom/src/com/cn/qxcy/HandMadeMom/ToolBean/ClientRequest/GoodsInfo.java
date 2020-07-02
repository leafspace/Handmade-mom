package com.cn.qxcy.HandMadeMom.ToolBean.ClientRequest;

public class GoodsInfo {
	private Integer goodsId;
	private String goodsTitle;
	private String goodsSpec;
    private Integer goodsFreightPrice;
    private Integer goodsRemainNum;
    private double goodsPrice;
    private String goodsDetailsText;
    private VedioUrls goodsDetailsVedioUrls;
    private String goodsTotorialText;
    private VedioUrls goodsTotorialVedioUrls;
    private ImgUrls goodsImgUrls;
    
    public GoodsInfo(String goodsTitle, String goodsSpec, Integer goodsFreightPrice, 
    		Integer goodsRemainNum, double goodsPrice, String goodsDetailsText, String goodsTotorialText) {
    	this.goodsTitle = goodsTitle;
    	this.goodsFreightPrice = goodsFreightPrice;
    	this.goodsSpec = goodsSpec;
    	this.goodsRemainNum = goodsRemainNum;
    	this.goodsPrice = goodsPrice;
    	this.goodsDetailsText = goodsDetailsText;
		this.goodsTotorialText = goodsTotorialText;
    }
    
	public Integer getGoodsId() {
		return goodsId;
	}
	public void setGoodsId(Integer goodsId) {
		this.goodsId = goodsId;
	}
	public String getGoodsTitle() {
		return goodsTitle;
	}
	public void setGoodsTitle(String goodsTitle) {
		this.goodsTitle = goodsTitle;
	}
	public Integer getGoodsFreightPrice() {
		return goodsFreightPrice;
	}
	public void setGoodsFreightPrice(Integer goodsFreightPrice) {
		this.goodsFreightPrice = goodsFreightPrice;
	}
	public String getGoodsSpec() {
		return goodsSpec;
	}
	public void setGoodsSpec(String goodsSpec) {
		this.goodsSpec = goodsSpec;
	}
	public Integer getGoodsRemainNum() {
		return goodsRemainNum;
	}
	public void setGoodsRemainNum(Integer goodsRemainNum) {
		this.goodsRemainNum = goodsRemainNum;
	}
	public double getGoodsPrice() {
		return goodsPrice;
	}
	public void setGoodsPrice(double goodsPrice) {
		this.goodsPrice = goodsPrice;
	}
	public String getGoodsDetailsText() {
		return goodsDetailsText;
	}
	public void setGoodsDetailsText(String goodsDetailsText) {
		this.goodsDetailsText = goodsDetailsText;
	}
	
	public String getGoodsTotorialText() {
		return goodsTotorialText;
	}
	public void setGoodsTotorialText(String goodsTotorialText) {
		this.goodsTotorialText = goodsTotorialText;
	}

	public ImgUrls getGoodsImgUrls() {
		return goodsImgUrls;
	}

	public void setGoodsImgUrls(ImgUrls goodsImgUrls) {
		this.goodsImgUrls = goodsImgUrls;
	}

	public VedioUrls getGoodsDetailsVedioUrls() {
		return goodsDetailsVedioUrls;
	}

	public void setGoodsDetailsVedioUrls(VedioUrls goodsDetailsVedioUrls) {
		this.goodsDetailsVedioUrls = goodsDetailsVedioUrls;
	}

	public VedioUrls getGoodsTotorialVedioUrls() {
		return goodsTotorialVedioUrls;
	}

	public void setGoodsTotorialVedioUrls(VedioUrls goodsTotorialVedioUrls) {
		this.goodsTotorialVedioUrls = goodsTotorialVedioUrls;
	}
    
    
}
