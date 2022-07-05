'use strict';

class TableTemplate{// eslint-disable-line no-unused-vars
    static fillIn(table_id, map, columnName = undefined){
        const table = document.getElementById(table_id);
        const tbody = table.children[0];
        const header = tbody.children[0];
        const headerColumns = header.children;

        let k = 0;
        for(let i = 0; i < headerColumns.length; i++){
            const templateProcessor = new Cs142TemplateProcessor(headerColumns[i].textContent);
                headerColumns[i].textContent = templateProcessor.fillIn(map);
            if(headerColumns[i].textContent === columnName){
                k = i;
            }
        }

        if(columnName){
            let row = header.nextElementSibling;
            while(row){
                const cols = row.children;
                const templateProcessor = new Cs142TemplateProcessor(cols[k].textContent);
                cols[k].textContent = templateProcessor.fillIn(map);
                row = row.nextElementSibling;
            }
        }else {
            for(let i = 1; i < tbody.children.lengthl; i++){
                const cols = tbody.children[i].children;
                for(let j = 0; j < cols.length; j++){
                    const templateProcessor = new Cs142TemplateProcessor(cols[j].textContent);
                    cols[j].textContent = templateProcessor.fillIn(map);
                }
            }
        }
        table.style.visibility = "visible";
    }
}