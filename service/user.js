import request from ".";

export async function getAllUser() {
  return request(`/user`, {
    method: "GET",
  });
}
export async function createUser(data) {
  return request(`/user`, {
    method: "POST",
    data
  });
}