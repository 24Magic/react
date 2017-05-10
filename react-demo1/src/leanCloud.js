import AV from 'leancloud-storage'
var APP_ID = '0xiWf8mAkk8MkOG1jE4yYMSm-gzGzoHsz';
var APP_KEY = 'qKP4VqeNcwTpulqS6Ef5OXfW';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

export default AV

export function signUp(username, password, email, successFn, errorFn){
	//新建AVUser对象实例
	var user = new AV.User()
	//设置用户名
	user.setUsername(username)
	//设置密码
	user.setPassword(password)
	//设置邮箱
	user.setEmail(email)
	user.signUp().then(function (loginedUser){
		let user = getUserFromAVUser(loginedUser)
		successFn.call(null, user)
	}, function(error){
		errorFn.call(null, error)
	})
	return undefined
}

export function getCurrentUser(){
	let user = AV.User.current()
	if (user){
		return getUserFromAVUser(user)
	}else{
		return null
	}
}

function getUserFromAVUser(AVUser){
	return {
		id: AVUser.id,
		...AVUser.attributes
	}
}