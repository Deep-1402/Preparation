/*
@Sequelize 
import { Sequelize, Op, Model, DataTypes } from "@sequelize/core";
(I)
const sequelize = new Sequelize(
    "database", "Username", "Password",
    {
        host : "localhost",
        dialect : "mysql/sqlite/mssql/sqlite"
    }
)

-- to establise connection
try{
    await sequelize.authenticate();
    console.log("Connection Has Establised");
}catch( error ){
    console.error(`Error : ${error}`)
}

-- close
sequelize.close(); 
-------------------------
--@ to use MySQL 
--(II)Import & use mysql dialect 
--`install npm i @sequelize/mysql`
import {MySqlDialect} from "@sequelize/mysql";
const sequelize = new Sequelize({
    dialect : MySqlDialect,
    databse : "dev",
    user : "myuser",
    password : "mypass",
    host : "localhost",
    port : 3306,
    logging : console.log, // to debug
})
-- ------------------------------
--@ DataTypes
`import { DataTypes } from "@sequelize/core"`;
(I)String
=> CHAR(n), STRING(n), TEXT
(II) => BOOLEAN
(II) Integer
=> TINYINT(1), INTEGER, BIGINT, FLOAT(6,2), DECIMAL(6,2)
(III) Date
=> DATE : date&time, DATEONLY, TIME, NOW : defaultvalue
(IV) => BLOB
(V) => ENUM(value1, value2, ..., valueN)


----------------------
-- create model (table with attributes)
-- Two Way To Create Model (I) calling sequelize.define() ,(II) Extending Model & calling init(attribute, option) 
-- using sequelize.define(modelName, attributes, options)
let employee = sequelize.define(
    -- first argument Model Name 
    "employee", 
    -- second argument Atributes Column NAmesa and constrints
    {
        id : {
            type : DataTypes.STRING(20),
            defaultValue : "Dev",
            comment : "Primary Key",
            allowNull : false,
            primaryKey : true,
            autoIncrement : true,
            unique : true,
            validate : {
                -- Built-in Validators 
                max / min : num,
                len : [min, max],
                is/not : reqExp,
                isEmail / isUrl / isAlpha / isAlphanumeric / isNumeric / is[Int,Decimal,Float,Date] / is[Lower,Upper]case, isNull / notNull / notEmpty : true/false,
                isAfter / isBefore : "2011-11-05"
                equals : specfic_value,
                notIn / isIn : [ [val1, val2, ...,valN] ]
                -- Custom Validator
                isEven(val) => {
                    if(parseInt(value) % 2 !== 0 )
                     throw new Error("Only Even Allowed") 
                }
                -- Custom Message For Built-in Methods 
                isInt : {
                    msg : "Must Be Interger Number In Salary"
                }
            }
        },
        column2 : {
            type : DataType.INTEGER
        },....
    },

    {
        tableName : "Empoyee", 
        freezeTableName: true,    -- if you want model name =table name 
        timestamps : true/false,
        paranoid: true,     // wont work if `timestamp= false` 
        underscored : true, -- gives in snack_case
        comment : "Table Only stores Employee and derived from Users"
    }
)

async () => await sequelize/model.sync({ force: false, alter : true });
-- -------------
-- @@instance
-- create an instance of Model
const dev = Employee.build/create({name: "dev"})
-- update the instance `dev.save()`
-- delte the instance `dev.destroy()`
-- to reload `dev.reload()`
 
-- - - ------------

@@ Operators
`import { Op } from "sequelize";
Mode.findAll({
    where : {
        [Op.and/or] : [{ col1 : value }, { col2 : value}, ... ]   --((col1=value) AND/OR (col2=value)..),
        [Op.eq/ne] : value,
        [Op.is] : null,   -- IS NULL
        -- number comparison
        [Op.gt/gte] : value,     -- >=
        [Op.lt/lte] : value ,    -- <=
        [Op.between/notBetween] : [minValue, MaxVal] ,   -- NOT BETWEEN minval AND MaxVal
        [Op.in/notIn] : [val1, val2, .., valN],
        [Op.like/notLike] : "de_p%",   
    }

})

-- -------------------------

-- @@@Queries
-- =>@ Insert Query
-- syntax : 
-- Single insert
const employeeInsert = await employee.create(
    {
        column1 : value1, 
        column2 : value2,
        ...
    },
    -- optional argument
    {
        fields : ['coumn1', "column2", ..., "columnN"]
    }
)
-- Bulk Insert
Model..bulkCreate([{ name: 'abc123', ... }, { name: 'name2' ... }], {
 fields : ['coumn1', "column2", ..., "columnN"]
}
-------------------------
-- =>@ Select Query 
-- syntx :
(I) Model.findAll()
 Model.findAll( {
            attributes : {
                ["column1", "column2" , ["Column3" , "column3_Alias_Name" ], ["column4", "column_4_Alias_name"], "column5" ] ,
                include : [model,aggregate_functions],
                exclude : [],

            },
            group : "column",
            where : {},
            offset : num,
            limit :num,
        })
-- in argment you ahve to define colun in array and if you want to give an alias name give nested array insted of that value ["column", "alias"]
(II) Mode.findByPk(num) :- return only single recordby matching pri,mary key othervwise null
(III) Model.findOne() : only One that satisfies condition
(IV) findOrCreate() Will create an entry if not find  , "default" optin is used what must be created in case nothing found 
Model.findOrCreate({
    where : {},
    defaults : {}

})
(V) findANdCountAll() : this one is combination of "count" and "findall" this one is used when you want to retrive data using "limit" & "offset" but also wnat Total Number of records, and Limited Rows(becuse of limit, offset)
Model.findAndCountAll({
    where : { },
    offset : 10,
    limit : 2
})



let specificOnes = await employee.findAll( {
        attributes : ["name", "department_id", "city", ["DOJ", "Date_of_Joining"], "salary" ]    
    })

let allEmployee = await employee.findAll();
-- --
-- if you want to use aggregate function use `sequelize.fn("count/min/max/avg", sequelize.col("column") )`
let employeeCount = employee.findAll({
        attributes : ["column1", [sequelize.fn("count", sequelize.col("employee_name") ), "Total_Employee" ], "column3" ] 
    });

-- & if you want all columns and just Include  aggregate function(total employee / average salary / total salary)
let includeTotalEmployee = employee.findAll( {
            attributes : {
                include : [ [sequelize.fn("count", sequelize.col("employee_name")), "Total_Employee"] , [sequelize.fn("avg"), sequelize.col("salary"), "Average_salary"], ...]
                -- also includes Model
                include : { model : Employee, as : "EMployeeModel" }
            }
       } )
-- & if you want to exclude some column(don't want to show it)
Model.findAll({
    attributes : {
        exclude : ["coumn1", "column2", ..., "columnN"]
    }
})

-- @Where Clause
Model.findAll({
    where : {
        id : 26,
        status : "active",
        [Op.or] : [{ gender : "male" }, { city : "navsari" }, ...],
        [Op.or]: [ { salary :{ [Op.lt]: 1000 } }, { age : { [Op.between]: [12, 18]  } } ]
    }
})

-- => @Update Query 
(I) : model.update(set, ehere)
Model.update(
    {
        col1 : val1, col2 : val2..
    },
    {
        where : {
            id : { [Op.eq] : value },
            name : "dev"
        }
    }
)

(II) upsert() : of record matches in values if primary key or unique key found and matches then updated otherwse creates new one
Model.upsert(
    {record values including primary key/unique key },
    { returning : true}

)


-- =>@ Delete Query
Model.destroy({
    where : {
        conditons...
    }
})
-- to truncate
Model.destroy( { truncate : true } );
-- if `paranoid : true` then just set `deletedAt` flag
`await model.destroy({ force: true })`; // Would really delete the record
-- to restore soft delete 
await model.restore();

-------------------------------------------------

-- @Utility Methods 
I) Model.count( { where : {} } ) :- simply COunt Occurences
(II) Model.max/min/sum("column", { where : {} } );
(III) Model.increment({age : +5 , slary : -10 }, {where : {} } )

-- - -------------------------------------------
-- -@@ RAW Queries 
-- Syntax :- sequelize.query(
        raw_queery, 
        { 
          type: QueryTypes.SELECT/INSERT/UPDATE/DLETE/RAW,
          replacements/bind : {key:value,..}/[val1,..]
        //  -- if map results with Models
            model : model_name,
            mapToModel : true
        }
// );
-- Parameter Bindings
-- two ways To bind Parameters
-- (I) replacements (II) bind

(I) replacements : Replacemnet in query can be done in query two ways 1)named parameter(:key) objcet  2)Unnammed parameter(?) array
1)sequelize.query("select * from ? whree ? = ?", {
        replacements : ["table_name", "column", value ],
        type : QueryTypes.SELECT,
});
2)sequelize.query('SELECT * FROM :table_name WHERE status IN(:status)', {
  replacements: { status: ['active', 'inactive'], table_name : "users" },
  type: QueryTypes.SELECT,
});
---
(II) bind : like replacments but It Uses The $sign for Named and unammed
1)sequelize.query("select * from $1 whree $2 = $3", {
        bind : ["table_name", "column", value ],
        type : QueryTypes.SELECT,
});
2)sequelize.query('SELECT * FROM $table_name WHERE status IN($status)', {
  bind: { status: ['active', 'inactive'], table_name : "users" },
  type: QueryTypes.SELECT,
});


-- Diffrence B/w Bind & Replacemnets
-- Replacements : Sequelize Inserts Values Into SQL String Before Sending It To Databse. So MySQL DB Only Sees Normal Query With values
eg : SELECT * FROM Hridyam WHERE name = 'Dev';
-- Binds : Sequelise Sends The SQL The Query With "Placeholder($1)" and send "Values" Saparatelyy And MySQL db FIlls The Value
eg :-
query :- 'SELECT * FROM users WHERE name = $1/$key' 
value :- ["Dev"]/{key:value}
-- ----------------------------------------------

-- @@Associations
-- Sequelize Provides 4 Tpes Of Association
-- note : tbl_one(sorceModel), tbl_two(targetModel)
(I) hasOne      : tbl_one.hasOne(tbl_two) : foreign key in model "tbl_two"
(II) belongsTo  : tbl_one.belongsTo(tbl_two) : foreign key in model "tbl_one"
(III) hasMany   : tbl_one.hasMany(tbl_two) foreign kkey in miodel "tbl_two"
(IV) belongsToMany  : tbl_one.belongsToMany(B, {through : "table_three"}) : 

-- OneToOne relatin : hasOne & belongsTo
-- OneToMany realatinship : hasMany & belongsTo
-- ManyToMAny relationship : belongsToMany & belongsToMany
*/
