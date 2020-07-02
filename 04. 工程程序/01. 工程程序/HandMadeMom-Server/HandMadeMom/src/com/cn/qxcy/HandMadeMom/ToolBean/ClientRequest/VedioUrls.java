package com.cn.qxcy.HandMadeMom.ToolBean.ClientRequest;

public class VedioUrls {
	private String targetUrl;
	private String vedioUrl;
	
	public VedioUrls(String strTargetUrl, String vedioUrl)
	{
		this.targetUrl = strTargetUrl;
		this.vedioUrl = vedioUrl;
	}
	
	public final String getTargetUrl()
	{
		return this.targetUrl;
	}
	
	public final String getImaUrl()
	{
		return this.vedioUrl;
	}
	
	public void setTargetUrl(String strTargetUrl)
	{
		this.targetUrl = strTargetUrl;
	}
	
	public void setImgUrl(String vedioUrl)
	{
		this.vedioUrl = vedioUrl;
	}
}
