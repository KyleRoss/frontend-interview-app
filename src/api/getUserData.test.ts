import { normalizeUserData, type User } from './getUserData';

const rawData: User[] = [{
  id: 1,
  name: 'John Doe  ',
  title: 'Software Engineer',
  department: 'Engineering',
  email: 'john.DOE@example.com',
  phone: '1234567890',
  gender: 'M',
  location: 'New York',
  role: 'Member',
  isActive: true,
  image: 'https://example.com/image.jpg',
}, {
  id: 2,
  name: '   Jane Doe  ',
  title: 'Software Engineer',
  department: 'Engineering',
  email: 'JANE.DOE@ExAmPle.COM',
  phone: null,
  gender: 'F',
  location: 'New York',
  role: 'Owner',
  isActive: true,
  image: 'https://example.com/image.jpg',
}];

describe('normalizeUserData', () => {
  it('should normalize the user data', async () => {
    const data = normalizeUserData(rawData);

    expect(data).toHaveLength(2);

    expect(data[0]).toBe(expect.objectContaining({
      id: 1,
      name: 'John Doe',
      title: 'Software Engineer',
      department: 'Engineering',
      email: 'john.doe@example.com',
      phone: '1234567890',
      gender: 'M',
      location: 'New York',
      role: 'Member',
      isActive: true,
      image: 'https://example.com/image.jpg',
    }));

    expect(data[1]).toBe(expect.objectContaining({
      id: 2,
      name: 'Jane Doe',
      title: 'Software Engineer',
      department: 'Engineering',
      email: 'jane.doe@example.com',
      phone: null,
      gender: 'F',
      location: 'New York',
      role: 'Owner',
      isActive: true,
      image: 'https://example.com/image.jpg',
    }));
  });
});
