// import store from "@/store";

export const usePermission = () => {
  function checkButtonPermission(_permission?) {
    //   if (isUndefined(permission)) {
    //     return true;
    //   }

    //   const buttonPermissions = store.getters.permissions;

    //   return buttonPermissions[permission];
    return true
  }

  return {
    checkButtonPermission,
  }
}
