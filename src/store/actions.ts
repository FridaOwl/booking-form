export const UPDATE_FORM_DATA = "UPDATE_FORM_DATA";

export const updateFormData = (formData: any) => ({
  type: UPDATE_FORM_DATA,
  payload: formData,
});
