import utils from './utils'
class user {
    constructor() {
        if (!this.hasLogin()) {
            this.load();
        }
    }
    displayName = '';
    perms = [];//权限
    roles = [];//["管理员"]  
    token = '';
    userId = -1;
    hasLogin = () => {
        return this.userId != -1;
    }
    save() {
        const value = {
            displayName: this.displayName,
            userId: this.userId,
            token: this.token,
            perms: this.perms,
            roles: this.roles
        };
        utils.saveData('user', value);
    }
    load() {
        utils.loadData('user', this);
    }
    logout = () => { 
        this.displayName = '';
        this.perms = [];//权限
        this.roles = [];//["管理员"]  
        this.token = '';
        this.userId = -1; 
        //clean
        utils.saveData('user', undefined);
    }
}


export default new user;


// displayName
// :
// "管理员"
// perms
// :
// (7) [0, 1, 2, 3, 4, 5, 6]
// roles
// :
// ["管理员"]
// token
// :
// "df81f6692ebdd3faae39184a01b77ce2"
// userId
// :
// 0