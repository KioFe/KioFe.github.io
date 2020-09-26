(this.webpackJsonpmanaging_user=this.webpackJsonpmanaging_user||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(8),i=n.n(s),c=(n(14),n(1)),o=n(2),u=n(4),l=n(3),m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid"},r.a.createElement("div",{className:"container text-center btn-dark"},r.a.createElement("h1",{className:"display-4"},"Managing Users Project"),r.a.createElement("p",{className:"lead"},"Using ReactJS")))}}]),n}(a.Component),d=n(5),p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).isChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(d.a)({},t,n))},a.reOnClick=function(){var e={};e.id=a.state.id,e.name=a.state.name,e.number=a.state.number,e.permission=a.state.permission,a.props.getUserInfo(e),a.props.StatusEdit()},a.state={id:a.props.userEditObj.id,name:a.props.userEditObj.name,number:a.props.userEditObj.number,permission:a.props.userEditObj.permission},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"v"},r.a.createElement("div",{className:"card text-left"},r.a.createElement("div",{className:"card btn-default mb-3",style:{maxWidth:"18rem"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{method:"post"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Name"),r.a.createElement("input",{onChange:function(t){return e.isChange(t)},defaultValue:this.props.userEditObj.name,type:"text",name:"name",className:"form-control",placeholder:"Enter Name",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Number Phone"),r.a.createElement("input",{onChange:function(t){return e.isChange(t)},defaultValue:this.props.userEditObj.number,type:"text",name:"number",className:"form-control",placeholder:"Enter Phone Number",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"User Permission"),r.a.createElement("select",{onChange:function(t){return e.isChange(t)},defaultValue:this.props.userEditObj.permission,name:"permission",className:"custom-select",required:!0},r.a.createElement("option",{value:1},"Admin"),r.a.createElement("option",{value:2},"Super User"),r.a.createElement("option",{value:3},"User"))),r.a.createElement("button",{type:"submit",onClick:function(){return e.reOnClick()},className:"btn btn-success"},"Save"))))))}}]),n}(a.Component),h=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).isChange=function(e){a.setState({tempValue:e.target.value}),a.props.connectSearch(a.state.tempValue)},a.DisplayButton=function(){return!0===a.props.ChangingStatus?r.a.createElement("div",{onClick:function(){return a.props.connection()},className:"btn  btn-danger float-right"},"Close"):r.a.createElement("div",{onClick:function(){return a.props.connection()},className:"btn  btn-success float-right"},"Add User")},a.getUserInfo=function(e){a.setState({userObj:e}),a.props.getUserInfoApp(e)},a.isShowEdit=function(){if(!0===a.props.changeStatusEdit)return r.a.createElement(p,{getUserInfo:function(e){return a.getUserInfo(e)},userEditObj:a.props.userEditObj,StatusEdit:function(){return a.props.StatusEdit()}})},a.state={tempValue:"",userObj:{}},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row SearchForm"},r.a.createElement("div",{className:"col-12"},this.isShowEdit(),r.a.createElement("div",{className:"btn-group"},r.a.createElement("input",{type:"text",onChange:function(t){return e.isChange(t)},placeholder:"Search"}),r.a.createElement("div",{className:"btn btn-primary",onClick:function(t){return e.props.connectSearch(e.state.tempValue)}},"Search")),this.DisplayButton(),r.a.createElement("hr",null)))}}]),n}(a.Component),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).showPermission=function(){return"1"===a.props.permission?"Admin":"2"===a.props.permission?"Super User":"User"},a.editClick=function(e){a.props.editFunc(e),a.props.StatusEdit()},a.deleteButClick=function(e){a.props.deleteButClick(e)},a.state={},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("tr",null,r.a.createElement("td",null,this.props.id),r.a.createElement("td",null,this.props.name),r.a.createElement("td",null,this.props.number),r.a.createElement("td",null,this.showPermission()),r.a.createElement("td",null,r.a.createElement("div",{className:"btn-block"},r.a.createElement("button",{onClick:function(t){return e.editClick(t)},className:"btn btn-primary "},"Edit"),r.a.createElement("button",{onClick:function(t){return e.deleteButClick(e.props.id)},className:"btn btn-danger "},"Delete"))))}}]),n}(a.Component),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).deleteButClick=function(e){a.props.deleteUser(e)},a.ShowTableData=function(){return a.props.dataProps.map((function(e){return r.a.createElement(b,{deleteButClick:function(e){return a.deleteButClick(e)},editFunc:function(t){return a.props.editUser(e)},id:e.id,name:e.name,number:e.number,permission:e.permission,StatusEdit:function(){return a.props.StatusEdit()}})}))},a.state={},a}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"col text-center"},r.a.createElement("table",{className:"table table-triped table-hover table-bordered "},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"STT"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"PhoneNumber "),r.a.createElement("th",null,"Permission"),r.a.createElement("th",null,"Edit"))),r.a.createElement("tbody",null,this.ShowTableData())))}}]),n}(a.Component),E=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).isChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(d.a)({},t,n))},a.DisplayForm=function(){if(!0===a.props.ChangingStatus)return r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card text-left"},r.a.createElement("div",{className:"card btn-default mb-3",style:{maxWidth:"18rem"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{method:"post"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",name:"name",onChange:function(e){return a.isChange(e)},className:"form-control","aria-describedby":"emailHelp",placeholder:"Enter Name",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Number Phone"),r.a.createElement("input",{type:"text",name:"number",onChange:function(e){return a.isChange(e)},className:"form-control",placeholder:"Enter Phone Number",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"User Permission"),r.a.createElement("select",{name:"permission",onChange:function(e){return a.isChange(e)},className:"custom-select",required:!0},r.a.createElement("option",{value:1},"Admin"),r.a.createElement("option",{value:2},"Super User"),r.a.createElement("option",{value:3},"User"))),r.a.createElement("input",{type:"reset",onClick:function(e,t,n){return a.props.add(a.state.name,a.state.number,a.state.permission)},className:"btn btn-success",value:"Add new user"}))))))},a.state={id:"",name:"",number:"",permission:""},a}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,this.DisplayForm())}}]),n}(a.Component),g=(n(15),n(6)),v=n(16).v4,S=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).ChangingStatus=function(){a.setState({status:!a.state.status})},a.getTextSearch=function(e){return a.setState({searchText:e})},a.StatusEdit=function(){a.setState({changeStatusEdit:!a.state.changeStatusEdit})},a.editUser=function(e){a.setState({userEditObj:e})},a.getNewUser=function(e,t,n){var r={};r.id=v(),r.name=e,r.number=t,r.permission=n;var s=a.state.data;s.push(r),a.setState({data:s}),localStorage.setItem("userData",JSON.stringify(s))},a.getUserInfoApp=function(e){a.state.data.forEach((function(t,n){t.id===e.id&&(t.name=e.name,t.number=e.number,t.permission=e.permission)})),localStorage.setItem("userData",JSON.stringify(a.state.data))},a.deleteUser=function(e){var t=a.state.data.filter((function(t){return t.id!==e}));a.setState({data:t}),localStorage.setItem("userData",JSON.stringify(t))},a.state={status:!1,data:g,searchText:"",changeStatusEdit:!1,userEditObj:{}},a}return Object(o.a)(n,[{key:"componentWillMount",value:function(){if(null===localStorage.getItem("userData"))localStorage.setItem("userData",JSON.stringify(g));else{var e=JSON.parse(localStorage.getItem("userData"));this.setState({data:e})}}},{key:"render",value:function(){var e=this,t=[];return this.state.data.forEach((function(n){n.name.indexOf(e.state.searchText)>-1&&t.push(n)})),r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement("div",{className:"container"},r.a.createElement(h,{getUserInfoApp:function(t){return e.getUserInfoApp(t)},userEditObj:this.state.userEditObj,changeStatusEdit:this.state.changeStatusEdit,StatusEdit:function(){return e.StatusEdit()},connection:function(){e.ChangingStatus()},ChangingStatus:this.state.status,connectSearch:function(t){return e.getTextSearch(t)}}),r.a.createElement("div",{className:"row"},r.a.createElement(f,{deleteUser:function(t){return e.deleteUser(t)},StatusEdit:function(){return e.StatusEdit()},editUser:function(t){return e.editUser(t)},dataProps:t}),r.a.createElement(E,{add:function(t,n,a){return e.getNewUser(t,n,a)},ChangingStatus:this.state.status}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e){e.exports=JSON.parse('[{"id":1,"name":"Do ","number":"0963861002","permission":1},{"id":2,"name":"Do Minh ","number":"0963861002","permission":3},{"id":3,"name":"Do Minh Vuong","number":"0963861002","permission":2},{"id":4,"name":"Do  Vuong","number":"0963861002","permission":1},{"id":5,"name":" Minh Vuong","number":"0963861002","permission":3},{"id":6,"name":" king","number":"0963861002","permission":2},{"id":7,"name":"Vuong","number":"0963861002","permission":1}]')},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.9e7d6852.chunk.js.map