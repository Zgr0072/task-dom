/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        document.body.innerHTML += '<' + tag + '>' + content + '</' + tag + '>';
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    function addChildren(parent, count, curLvl) {
        let res = [];
        for (let i = 0; i < count; i++) {
            let child = document.createElement('div');
            child.setAttribute('class', 'item_' + curLvl);
            parent.appendChild(child);
            if (curLvl < level) {
                addChildren(child, count, curLvl + 1);
            }
        }
    }
    let root = document.createElement('div');
    root.setAttribute('class', 'item_1');
    addChildren(root, childrenCount, 2);
    return root;
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/

export function replaceNodes() {
    let root = generateTree(2, 3);
    let childrenColl = root.getElementsByClassName('item_2');
    for (let i = childrenColl.length - 1; i >= 0; i--) {
        let sect = document.createElement('section');
        sect.setAttribute('class', 'item_2');
        sect.innerHTML = childrenColl[i].innerHTML;
        root.appendChild(sect);
        root.removeChild(childrenColl[i]);
    }
    return root;
}
