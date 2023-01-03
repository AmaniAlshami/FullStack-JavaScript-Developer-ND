import { User, UserStore } from '../../models/user';
import bcrypt from 'bcrypt';

const store = new UserStore()
const { PEPPER } = process.env;
const saltAround = process.env.SALT_ROUNDS!;  

describe("User Model", () => {
  it('should have an index method', () => {
    expect(store.index).toBeDefined();
  });

  it('should have a show method', () => {
    expect(store.show).toBeDefined();
  });

  it('should have a create method', () => {
    expect(store.create).toBeDefined();
  });

  it('create method should add a user', async () => {
    const result = await store.create({
      id: 1,
      firstName: "amani",
      lastName : "alshami",
      password : "a123"
    });
    const hash = bcrypt.hashSync(
      "a123" + PEPPER, 
      parseInt(saltAround)
   );
    expect(result).toEqual({
      id: 1,
      firstName: "amani",
      lastName : "alshami",
      password :hash
    });
  });
  it('index method should return a list of users', async () => {
    const result = await store.index();
    expect(result).toEqual([{
      id: 1,
      firstName: "amani",
      lastName : "alshami"
    }]);
  });

  it('show method should return the correct user', async () => {
    const result = await store.show("1");
    expect(result).toEqual({
      id: 1,
      firstName: "amani",
      lastName : "alshami"
    });
  });
});