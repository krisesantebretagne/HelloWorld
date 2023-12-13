/* Pour définir plusieurs types : type 1 & type 2 */

type Draggable = {
    drag: () => void
};

type Retaillable = {
    retailler: () => void
};

type WidgetUI = Draggable & Retaillable;

let zoneTexte: WidgetUI = {
        drag:  () => {},
        retailler: () => {}

}