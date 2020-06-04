export const login = user => (
    $.ajax({
      method: 'POST',
      url: '/api/session',
      data: { user }
    })
  );
  
  export const signup = user => (
    $.ajax({
      method: 'POST',
      url: '/api/users',
      data: { user }
    })
  );

  export const deleteUser = reportId => (
    $.ajax ({
        method: 'DELETE',
        url: `/api/users/${userId}`,
      
    })
)
  
  export const logout = () => (
    $.ajax({
      method: 'DELETE',
      url: '/api/session'
    })
  );
  