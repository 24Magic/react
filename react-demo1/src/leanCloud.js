import AV from 'leancloud-storage'
var APP_ID = '0xiWf8mAkk8MkOG1jE4yYMSm-gzGzoHsz';
var APP_KEY = 'qKP4VqeNcwTpulqS6Ef5OXfW';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

export default AV

export const TodoModel = {
	getByUser(user, successFn, errorFn){
		let query = new AV.Query('Todo');
		query.find().then( (response) => {
			let array = response.map( (t) => {
				return {id: t.id, ...t.attributes}
			})
			successFn.call(null, array)
		}, (error) => {
			errorFn && errorFn.call(null, error)
		})
	},
	create({status, title, deleted}, successFn, errorFn){
		let Todo = AV.Object.extend('Todo')
		let todo = new Todo()
		todo.set('title', title)
		todo.set('status', status)
		todo.set('deleted', deleted)
		
		//单用户权限设置
		//只允许单一用户自己的todo
		let acl = new AV.ACL()
		acl.setPublicReadAccess(false)
		acl.setWriteAccess(AV.User.current(), true)
		todo.setACL(acl)

		todo.save().then( (response) => {
			successFn.call(null, response.id)
		}, (error) => {
			errorFn && errorFn.call(null, error)
		})
	},
	update(){

	},
	destroy(){

	}
}

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

export function signIn(username, password, successFn, errorFn){
	AV.User.logIn(username, password).then(function(loginedUser){
		let user = getUserFromAVUser(loginedUser)
		successFn.call(null, user)
	}, function(error){
		errorFn.call(null, error)
	})
}

export function getCurrentUser(){
	let user = AV.User.current()
	if (user){
		return getUserFromAVUser(user)
	}else{
		return null
	}
}

export function signOut(){
	AV.User.logOut()
	return undefined
}

export function sendPasswordResetEmail(email, successFn, errorFn){
	AV.User.requestPasswordReset(email).then(function(success){
		successFn.call()
	},function(error){
		errorFn.call(null, error)
	})
}

function getUserFromAVUser(AVUser){
	return {
		id: AVUser.id,
		...AVUser.attributes
	}
}