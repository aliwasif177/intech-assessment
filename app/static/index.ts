export const data:Data[] = [{ step: 0, questionSatatement: 'Does your business operate in CA?', yes: 1, no: 3,type:'checkbox',value:false },
{ step: 1, questionSatatement: 'How many employess do you have?', yes: 2, no: 3,value:0,type:'number',minValue:200},
{ step: 2, questionSatatement: 'Do you serve food', yes: 3, no: 3,type:'checkbox',value:false },
{ step: 3, questionSatatement: 'Do you serve hot food?', yes: 4, no: 4,type:'checkbox',value:false },
{ step: 4, questionSatatement: 'Are you open past mid night?', yes: 5, no: 5,type:'checkbox',value:false },
{ step: 5, questionSatatement: 'Do you host live music?', yes: 6, no: 6,type:'checkbox',value:false }
]

export type Data={
step:number,
questionSatatement:string,
yes:number,
no:number,
value:string|number|boolean
type:string
minValue?:number
}

export const booleansmap={
    true:'Yes',
    false:'No'
}