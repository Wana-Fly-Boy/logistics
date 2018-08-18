import Vue from "vue";

//存取localStorage中的数据
const store = {
    save(key, value) {
        localStorage.setItem(key,JSON.stringify(value));
        //考虑数据是数组，需转换为字符串格式，JSON.stringify
    },
    fetch(key) {
        return JSON.parse(localStorage.getItem(key)) || [];
    }
}

const list = store.fetch('logistics');

var vm = new Vue({
    el:".main",
    data: {
        list: list,
        address: "",
        name: "",
        date: "",
        edtorTodos: "",//记录正在编辑的数据
        beforeAddress: "",//记录正在编辑的数据的address
        beforeName: "",
        beforeDate: ""
    },
    watch:{
        list: {
            handler() {
                store.save('logistics',this.list);
            },
            deep:true
        }
    },
    methods: {
        addTodo(ev) {
            this.list.push({
                address:this.address,
                name:this.name,
                date:this.date
            });
            this.adress = "";
            this.name = "";
            this.date = "";
        },
        deleteTodo(todo) {//删除任务
            var index = this.list.indexOf(todo);
            this.list.splice(index,1);
        },
        edtorTodo(todo) {//编辑一条任务
            this.edtorTodos = todo;
            
            //编辑任务的时候，记录一下编辑这条任务的title，方便在取消编辑的时候重新给之前的title
            this.beforeAddress = todo.address;    
            this.beforeDate = todo.date;    
            this.beforeName = todo.name;    
        },
        edtorTodoed() {//编辑任务完成
            this.edtorTodos = "";
        },  
        cancelTodo(todo) {//取消编辑任务
            todo.address = this.beforeAddress;
            todo.date = this.beforeDate;
            todo.name = this.beforeName;

            //之前记录的值也没用了
            this.beforeAddress = "";
            this.beforeDate = "";
            this.beforeName = "";
        }
    },
    directives: {
        "focus": {
            update(el,binding) {
                console.log(el);
                console.log(binding);
                if(binding.value) {
                    el.focus();//调用原生方法
                }
            }
        }
    }
})

