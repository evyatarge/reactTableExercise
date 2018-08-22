
//actions types
export const MOVE_PAGE = 'MOVE_PAGE';
export const SAVE_DATA = 'SAVE_DATA';

export const Pages = {
    MAIN_PAGE: 0,
    ABOUT_PAGE: 1
};

//creators
export function moveToPage(index) {
    return { type: MOVE_PAGE, index }
}

export function saveData(data) {
    return { type: SAVE_DATA, data }
}

//example of how to call it:
// const moveToPage = pageNum => dispatch(moveToPage(pageNum));
// const saveData = data => dispatch(saveData(data));