package com.cn.qxcy.HandMadeMom.ToolBean.ClientRequest;

public class ImgUrls {
	private String targetUrl;
	private String imgUrl;
	
	public ImgUrls(String strTargetUrl, String strImgUrl)
	{
		this.targetUrl = strTargetUrl;
		this.imgUrl = strImgUrl;
	}
	
	public final String getTargetUrl()
	{
		return this.targetUrl;
	}
	
	public final String getImaUrl()
	{
		return this.imgUrl;
	}
	
	public void setTargetUrl(String strTargetUrl)
	{
		this.targetUrl = strTargetUrl;
	}
	
	public void setImgUrl(String strImgUrl)
	{
		this.imgUrl = strImgUrl;
	}
}
