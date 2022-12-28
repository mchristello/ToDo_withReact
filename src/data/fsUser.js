import fs from 'fs';


class Users {

    constructor () {
        this.path = './userdata.json';
    }

    read = () => {
        if(fs.existsSync(this.path)) {
            return fs.promises.readFile(this.path, 'utf-8')
                .then(res => JSON.parse(res))
        }
        return [];
    }

    write = (data) => {
        return fs.promises.writeFile(this.path, JSON.stringify(data, null, 3));
    }

    userIdGenerator = async () => {
        const db = await this.getUsers();
        const count = db.length;

        return (count > 0) ? count +1 : 1;        
    }

    createUser = async (name, lastname, email) => {
        const db = await this.read();

        const id = await this.userIdGenerator();
        console.log(`This is from createUser:`, id);
        
        const newUser = {
            id: id,
            name: name,
            lastname: lastname,
            email: email
        }

        db.push(newUser);

        await this.write(db);
        console.log(`The user ${newUser.name} has been created`);
    }

    getUsers = async() => {
        try {
            const db = await this.read();

            if(db.length === 0) {
                return console.log('The database is empty:', []);
            }

            return db;

        } catch {
            await this.write([])
            const resolve = this.read();
            return resolve;
        }
    }
}


const tester = new Users();

// tester.createUser(
//     'Luz', 
//     'Castro', 
//     'marialuzcastro90@gmail.com'
// )


console.log(await tester.getUsers());