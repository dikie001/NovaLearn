const MODE_AND_GRADE = "study_mode_and_grade";

export const getStudyDataFromStorage =  () => {
    const loadedData =  localStorage.getItem(MODE_AND_GRADE)
    const parsedData = loadedData? JSON.parse(loadedData):[]
    return parsedData
};
