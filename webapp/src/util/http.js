/*
 * @Version: v1.0.0
 * @Author: 汪洋
 * @Date: 2020-08-13 11:17:30
 * @LastEditTime: 2020-08-13 11:59:52
 */
export default async(method, url, data)=>{
    // function request() {
    // 加密
    const baseurl = 'https://api.apiopen.top'
    // https://api.apiopen.top/todayVideo

    wx.showLoading({ title: '加载中...' })
    return new Promise((resolve, reject) => {
        wx.request({
            url: `${baseurl}/${url}`,
            data: data,
            method: method, 
            header: {
                'Content-Type': method === 'POST' ? 'application/x-www-form-urlencoded' : 'application/json'
            },
            success: function (res) {
                console.log(res,'res22222')
                wx.hideLoading()
                // 解密
                if (res.data.code==200) {
                    resolve(res.data.result)
                } else {
                    reject(res.data.result)
                    
                }
            },
            fail: function () {
                wx.hideLoading()
                wx.showToast({
                    title: '网络请求失败',
                    icon: 'success',
                    duration: 1500
                })
                reject(new Error('Network request failed'))
                // throw new Error('Network request failed')
            },
        })
    })

    // }
}