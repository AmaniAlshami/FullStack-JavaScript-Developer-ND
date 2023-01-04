import { User, UserStore } from '../../models/user';

const store = new UserStore();  

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
      firstName: "Amani",
      lastName : "Alshami",
      password : "a123"
    });
   expect(result.id).toEqual(1)
  });
  it('index method should return a list of users', async () => {
    const result = await store.index();
    expect(result.length).toBeGreaterThan(0)
  });

  it('show method should return the correct user', async () => {
    const result = await store.show("1");
    expect(result.id).toEqual(1)
  });
});