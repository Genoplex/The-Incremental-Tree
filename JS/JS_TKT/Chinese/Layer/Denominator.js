addLayer('Denominator',
{
    name          : 'Denominator',
    symbol        : '<h6>1/D(x)</h6>',
    resource      : '无',
    baseResource  : '数字代币',
    baseAmount    :  function()
    {
        return player.points
    },
    color         : 'Lime',
    type          : 'normal',
    exponent      :  1,
    position      :  1,
    row           :  1,
    requires      :  new Decimal(Infinity),
    branches      :  function()
    {
        switch(player.Number.Stage)
        {
            case 1 :
            case 2 : 
            case 3 : return ['Number']; break
            default: break;
        }
    },

    resetDescription : '',

    hotkeys : 
    [

    ],

    tooltip :  function()
    {
        return 'DD: ' + format(player.Denominator.Data) + '<br>Effect: ÷' + format(player.Denominator.Denominator_Multi)
    },

    tabFormat :
    {
        'Main':
        {
            unlocked : true,
            content  : function()
            {
                var Format = []
                Format.push(['row',[
                                ['column',[
                                    ['display-text','<h2>Denominator Effect</h2>'],
                                    'blank',
                                    ['display-text','<h1>' + format(player.Denominator.Denominator_Multi + '</h1>')],],{'height':'90px','width':'350px','border':'3px white solid'}],
                                ['column',[
                                    ['display-text','<h1 style="font-size:50px">←</h1>']],{'width':'50px'}],
                                ['column',[
                                    ['display-text','<h2>Denominator Data</h2>'],
                                    'blank',
                                    ['display-text','<h1>' + format(player.Denominator.Data + '</h1>')],],{'height':'90px','width':'350px','border':'3px white solid'}],],{}])
                Format.push(['row',[
                                ['column',,{'width':'400px'}],
                                ['column',[
                                    ['display-text','<h1 style="font-size:50px">↑</h1>'],
                                    ['column',[
                                        ['display-text','<h2>DD. Gain</h2>'],
                                        'blank',
                                        ['display-text','<h1>+' + format(player.Denominator.Data_Gain_Total) + '/s</h1>'],],{'height':'90px','width':'350px','border':'3px white solid'}],],{'width':'350px'}],],{}])
                Format.push(['row',[
                                ['column',[
                                    ['column',[
                                        ['column',[
                                            ['display-text','<h1>×' + format(player.Denominator.Data_Gain_Mul) + ',^' + format(player.Denominator.Data_Gain_Exp)]],{'position':'absolute','left':'0'}],],{'width':'400px','transform':'translate(355px,-14px)'}]],{'width':'405px'}],
                                ['column',[
                                    ['display-text','<h1 style="font-size:50px">↑</h1>'],],{'width':'450px'}],],{}])
                Format.push(['h-line','900px'])
                Format.push('blank')
                Format.push(['column',[
                                ['clickable',2],
                                ['display-text','<h1 style="font-size:40px">↑</h1>'],
                                ['row',[
                                    ['clickable',4],
                                    ['column',[
                                        ['display-text',player.Denominator.Variable[3][3]?'<h1 style="font-size:40px">←</h1>':'']],{'width':'40px'}],
                                    ['clickable',1],
                                    ['column',[
                                        ['display-text',player.Denominator.Variable[4][3]?'<h1 style="font-size:40px">→</h1>':'']],{'width':'40px'}],
                                    ['clickable',5],],{}],
                                ['display-text',player.Denominator.Variable[2][3]?'<h1 style="font-size:40px">↓</h1>':''],
                                ['clickable',3],],{}])

                if(player.Denominator.Denominator_Upgrades[7][1].gte(1)) Format.push('blank',['bar','Count'],)
                return Format
            }
        },
        'Upgrades':
        {
            unlocked : function()
            {
                return player.Number.Stage > 1
            },
            content  : function()
            {
                var Format = []
                Format.push(['row',[
                                ['column',[
                                    ['display-text','<h2>DD. Gain</h2>'],
                                    'blank',
                                    ['display-text','<h1>+' + format(player.Denominator.Data_Gain_Total) + '/s</h1>'],],{'height':'90px','width':'350px','border':'3px white solid'}],
                                ['column',[
                                    ['display-text','<h1 style="font-size:50px">→</h1>']],{'width':'50px'}],
                                ['column',[
                                    ['display-text','<h2>Denominator Data</h2>'],
                                    'blank',
                                    ['display-text','<h1>' + format(player.Denominator.Data + '</h1>')],],{'height':'90px','width':'350px','border':'3px white solid'}],],{}])
                Format.push(['row',[
                                ['column',,{'width':'405px'}],
                                ['column',[
                                    ['display-text','<h1 style="font-size:50px">↓</h1>'],],{'width':'350px'}],],{}])
                Format.push(['h-line','900px'])
                Format.push('blank','blank','blank')

                if(player.Number.Stage == 2)
                {
                    Format.push(['row',[
                        ['clickable',12],
                        ['column',,{'width':'54px'}],
                        ['clickable',11]],{}])
                }
                if(player.Number.Stage == 3)
                {
                    Format.push(['row',[
                        ['clickable',12],
                        ['column',,{'width':'18px'}],
                        ['clickable',13],
                        ['column',,{'width':'18px'}],
                        ['clickable',11]],{}])
                }
                Format.push('blank')

                if(player.Number.Stage>2) Format.push(['row',[
                                ['clickable',21],
                                ['column',,{'width':'18px'}],
                                ['clickable',22],
                                ['column',,{'width':'18px'}],
                                ['clickable',23],
                                ['column',,{'width':'18px'}],
                                ['clickable',24],
                                ['column',,{'width':'18px'}],
                                ['clickable',25],]])

                if(player.Infinity.Infinity_Upgrades[1][1].gte(1)) Format.push(
                    'blank',['row',[
                                ['clickable',26],
                                ['column',,{'width':'18px'}],
                                ['clickable',27],
                                ['column',,{'width':'18px'}],
                                ['clickable',28],]])

                if(player.Denominator.Denominator_Upgrades[7][1].gte(1)) Format.push('blank',['bar','Count'],)
                return Format
            }
        },
        'Setting':
        {
            unlocked : true,
            content : function()
            {
                var Format = []
                Format.push('blank','blank','blank')
               
                if(player.Infinity.Infinity_Upgrades[7][1].eq(1))
                {
                    Format.push(['row',[
                                    ['column',[
                                        ['column',[
                                        ['display-text','<h3>Maximize manual purchase?'],],{'position':'absolute','left':'0','transform':'translate(210px,-8px)'}]],{'width':'550px'}],
                                    ['column',[
                                        ['clickable','Max']],{'width':'250px'}],],{'height':'50px','width':'800px','background-color':'#222222'}])
                }
                if(     Format.length == 3
                    &&  Format[0] == Format[1]
                    &&  Format[1] == Format[2]) Format.push(['display-text','<h2>There is nothing in the setting bar now.'])
                return Format
            }
        }
    },

    microtabs:
    {
        
    },

    layerShown :  function()
    {
        return true
    },
    
    startData :  function()
    {    
        return{
        unlocked    : true,
		points      : new Decimal(10),
        Stop        : 0,

        Data              : new Decimal(10),
        Data_Gain_Base    : new Decimal(0),
        Data_Gain_Mul     : new Decimal(1),
        Data_Gain_Exp     : new Decimal(1),
        Data_Gain_Total   : new Decimal(0),

        Denominator_Multi : new Decimal(1),

        Imaginary_Number  : new Decimal(0),
                          // 0.PlaceHolder, 1.Input,        2.Output,         3.Inputting
        Imaginary_IO      : [0,             new Decimal(2), new Decimal(0.1), 1], // 1

                             // 0.PlaceHolder, 1.Number,       2.Effect,       3.Unlock, 4.Choosen
        Variable          : [0,[0,             new Decimal(0), new Decimal(0) ,1,        0,],   // 2
                               [0,             new Decimal(0), new Decimal(0) ,0,        0,],   // 3
                               [0,             new Decimal(0), new Decimal(0) ,0,        0,],   // 4
                               [0,             new Decimal(0), new Decimal(0) ,0,        0,],], // 5
        Change_Time       : new Decimal(30),
        
                                 // 0.PlaceHolder, 1.Level,        2.Effect,       3.Price
        Denominator_Clickables :[0,[0,             new Decimal(0), new Decimal(0), new Decimal(0)],   // 11
                                   [0,             new Decimal(0), new Decimal(0), new Decimal(0)],   // 12
                                   [0,             new Decimal(0), new Decimal(0), new Decimal(0)],], // 13
        
        
                                 // 0.PlaceHolder, 1.Level,        2.Price         3.Effect
        Denominator_Upgrades   :[0,[0,             new Decimal(0), new Decimal(0), new Decimal(0)],   // 21
                                   [0,             new Decimal(0), new Decimal(0), new Decimal(0)],   // 22
                                   [0,             new Decimal(0), new Decimal(0), new Decimal(0)],   // 23
                                   [0,             new Decimal(0), new Decimal(0), new Decimal(0)],   // 24
                                   [0,             new Decimal(0), new Decimal(0), new Decimal(0)],   // 25
                                   [0,             new Decimal(0), new Decimal(0), new Decimal(0)],   // 26
                                   [0,             new Decimal(0), new Decimal(0), new Decimal(0)],   // 27
                                   [0,             new Decimal(0), new Decimal(0), new Decimal(0)],   // 28
                                   [0,             new Decimal(0), new Decimal(0), new Decimal(0)],   // 24
                                   [0,             new Decimal(0), new Decimal(0), new Decimal(0)],], // 30

        Denominator_Bought_Mode : 0,
        }
    },
        
    gainMult :  function()
    {
        mult = new Decimal(1)
        return mult
    },

    gainExp :  function()
    {
        exp = new Decimal(1)
        return exp
    },

    update :  function(diff)
    {
        if(!player.Denominator.Stop)
        {
            // Variable 解锁相关函数 --------------------------------------------------------------------------------------------------------------------------
            for(var I=0; I<=player.Denominator.Denominator_Clickables[3][1].mul(2); I++)
            {
                player.Denominator.Variable[I][3] = 1
            }

            // Variables 相关函数 -----------------------------------------------------------------------------------------------------------------------------
            player.Denominator.Variable[1][2] = player.Denominator.Variable[1][1].max(0).sqrt() 
            player.Denominator.Variable[2][2] = player.Denominator.Variable[2][1].add(2).max(1).log(2.5).add(1).sub(new Decimal(2).log(2.5))
            player.Denominator.Variable[3][2] = player.Denominator.Variable[3][1].pow(0.1).add(1)
            player.Denominator.Variable[4][2] = player.Denominator.Variable[4][1].pow(0.1).add(1).log(100).add(1).log(100).add(1).mul(player.Denominator.Variable[4][1].pow(0.01)).max(1)
            var Smallest = new Decimal(1)
            for(var I=1; I<=4; I++)
            {
                if(player.Denominator.Variable[I][3]==1&&(player.Denominator.Variable[I][1].lt(player.Denominator.Variable[Smallest][1]))) Smallest = new Decimal(I)
            }
            if(player.Denominator.Denominator_Upgrades[8][1].gte(1))
            {
                player.Denominator.Variable[1][2] = player.Denominator.Variable[1][2].mul(2)
                player.Denominator.Variable[2][2] = player.Denominator.Variable[2][2].mul(2)
                player.Denominator.Variable[3][2] = player.Denominator.Variable[3][2].mul(2)
                player.Denominator.Variable[4][2] = player.Denominator.Variable[4][2].mul(2)
                player.Denominator.Variable[Smallest][2] = player.Denominator.Variable[Smallest][2].div(8)
            }
            if(player.Denominator.Variable[1][3]==0)
            {
                player.Denominator.Variable[1][1] = new Decimal(0)
                player.Denominator.Variable[1][2] = new Decimal(0)
            }
            if(player.Denominator.Variable[2][3]==0)
            {
                player.Denominator.Variable[2][1] = new Decimal(0)
                player.Denominator.Variable[2][2] = new Decimal(1)
            }
            if(player.Denominator.Variable[3][3]==0)
            {
                player.Denominator.Variable[3][1] = new Decimal(0)
                player.Denominator.Variable[3][2] = new Decimal(1)
            }
            if(player.Denominator.Variable[4][3]==0)
            {
                player.Denominator.Variable[4][1] = new Decimal(0)
                player.Denominator.Variable[4][2] = new Decimal(1)
            }

            // Denominator Upgrades 相关函数 ------------------------------------------------------------------------------------------------------------------
            var Level = new Decimal(0)
            for(var I=0; I<player.Denominator.Variable.length-1; I++)
            {
                Level = Level.add(player.Denominator.Variable[I+1][1].pow(2))
            }
            player.Denominator.Denominator_Upgrades[1][3] = Level.sqrt().max(1).log(2.5).max(1)

            var Total_For_Row1 = new Decimal(0)
            Price_For_Row1 = new Decimal(0)
            for(var I=1; I<=5; I++)
            {
                Total_For_Row1 = Total_For_Row1.add(player.Denominator.Denominator_Upgrades[I][1])
            }
            if(Total_For_Row1.eq(0)) Price_For_Row1 = new Decimal(200000)
            if(Total_For_Row1.eq(1)) Price_For_Row1 = new Decimal(4000000)
            if(Total_For_Row1.eq(2)) Price_For_Row1 = new Decimal(80000000)
            if(Total_For_Row1.eq(3)) Price_For_Row1 = new Decimal(1600000000)
            if(Total_For_Row1.eq(4)) Price_For_Row1 = new Decimal(32000000000)
            for(var I=1; I<=5; I++)
            {
                player.Denominator.Denominator_Upgrades[I][2] = Price_For_Row1
            }

            var Total_For_Row2 = new Decimal(0)
            Price_For_Row2 = new Decimal(0)
            for(var I=6; I<=8; I++)
            {
                Total_For_Row2 = Total_For_Row2.add(player.Denominator.Denominator_Upgrades[I][1])
            }
            if(Total_For_Row2.eq(0)) Price_For_Row2 = new Decimal(1e18)
            if(Total_For_Row2.eq(1)) Price_For_Row2 = new Decimal(5e21)
            if(Total_For_Row2.eq(2)) Price_For_Row2 = new Decimal(2.5e25)
            for(var I=6; I<=8; I++)
            {
                player.Denominator.Denominator_Upgrades[I][2] = Price_For_Row2
            }

            var D_Value = new Decimal(0)
            var Include = new Decimal(0)
            var A_Value = new Decimal(0)
            var Sample  = new Decimal(0)
            for(var I=0; I<player.Denominator.Variable.length-1; I++)
            {
                A_Value = A_Value.add(player.Denominator.Variable[I+1][1])
                if(player.Denominator.Variable[I+1][3] == 1) Include = Include.add(1)
            }
            A_Value = A_Value.div(Include)
            for(var I=0; I<player.Denominator.Variable.length-1; I++)
            {
                if(player.Denominator.Variable[I+1][3] == 1) Sample = Sample.add((player.Denominator.Variable[I+1][1].sub(A_Value)).pow(2))
            }
            D_Value = Sample.div(Include).sqrt().div(A_Value.eq(0)?1:A_Value).div(Include.sub(1).sqrt().max(1))
            player.Denominator.Denominator_Upgrades[5][3] = D_Value.mul(-0.25).add(1.25)


            // Denominator Clickables 相关函数 ----------------------------------------------------------------------------------------------------------------
            Denominator_Calculate_Upgrade_Price_And_Effect()
            
            // Denominator Input 相关函数 ---------------------------------------------------------------------------------------------------------------------
            player.Denominator.Imaginary_IO[1] = new Decimal(2)
            player.Denominator.Imaginary_IO[1] = player.Denominator.Imaginary_IO[1].mul(player.Denominator.Denominator_Clickables[2][2])
            player.Denominator.Imaginary_IO[1] = player.Denominator.Imaginary_IO[1].mul(player.Denominator.Denominator_Upgrades[4][1].gte(1)
                                                                                        ?   player.Denominator.Denominator_Multi
                                                                                        :   1)
            player.Denominator.Imaginary_IO[1] = player.Denominator.Imaginary_IO[1].mul(player.Denominator.Denominator_Upgrades[7][1].gte(1)
                                                                                        ?   10
                                                                                        :   1)
            player.Denominator.Imaginary_IO[1] = player.Denominator.Imaginary_IO[1].mul(player.Denominator.Denominator_Upgrades[6][1].gte(1)
                                                                                        ?   new Decimal(1).div(player.Numerator.Numerator_Multi)
                                                                                        :   1)

            if(player.Denominator.Imaginary_IO[3] == 1)
            {
                if(player.Denominator.Imaginary_IO[1].mul(diff).lte(player.Denominator.Data))
                {
                    player.Denominator.Imaginary_Number = player.Denominator.Imaginary_Number.add(player.Denominator.Imaginary_IO[1].mul(diff))
                    player.Denominator.Data             = player.Denominator.Data.sub(player.Denominator.Imaginary_IO[1].mul(diff))
                }
                else
                {
                    player.Denominator.Imaginary_Number = player.Denominator.Imaginary_Number.add(player.Denominator.Data)
                    player.Denominator.Data             = new Decimal(0)
                }
            }

            // Denominator Output 相关函数 --------------------------------------------------------------------------------------------------------------------
            player.Denominator.Imaginary_IO[2] = new Decimal(0.1)
            player.Denominator.Imaginary_IO[2] = player.Denominator.Imaginary_IO[2].mul(player.Infinity.Infinity_Upgrades[4][2])
            var Output = player.Denominator.Imaginary_Number.mul(new Decimal(1).sub(new Decimal(1).sub(player.Denominator.Imaginary_IO[2]).pow(diff)))
            if(Output.gte(player.Denominator.Imaginary_Number)) Output = player.Denominator.Imaginary_Number

            var Direction = 0
            for(var I=1; I<5; I++)
            {
                Direction += player.Denominator.Variable[I][4]
            }
            for(var I=1; I<5; I++)
            {
                if(player.Denominator.Variable[I][4] == 1) player.Denominator.Variable[I][1] = player.Denominator.Variable[I][1].add(Output.div(Math.max(Direction,1)))
            }
            if(Direction !== 0)player.Denominator.Imaginary_Number = player.Denominator.Imaginary_Number.sub(Output)

            // Denominator Data 相关函数 ----------------------------------------------------------------------------------------------------------------------
            player.Denominator.Data_Gain_Exp   = new Decimal(1)
            player.Denominator.Data_Gain_Exp   = player.Denominator.Data_Gain_Exp.mul(player.Denominator.Denominator_Upgrades[2][1].gte(1)
                                                                                      ?   1.1
                                                                                      :   1)
            player.Denominator.Data_Gain_Exp   = player.Denominator.Data_Gain_Exp.mul(player.Denominator.Denominator_Upgrades[5][1].gte(1)
                                                                                      ?   player.Denominator.Denominator_Upgrades[5][3]
                                                                                      :   1)
            player.Denominator.Data_Gain_Exp   = player.Denominator.Data_Gain_Exp.mul(player.Infinity.Infinity_Upgrades[8][2])
                                                                                      
            player.Denominator.Data_Gain_Mul   = new Decimal(1)
            player.Denominator.Data_Gain_Mul   = player.Denominator.Data_Gain_Mul.mul(player.Denominator.Denominator_Clickables[1][2])
            player.Denominator.Data_Gain_Mul   = player.Denominator.Data_Gain_Mul.mul(player.Denominator.Variable[2][2])
            player.Denominator.Data_Gain_Mul   = player.Denominator.Data_Gain_Mul.mul(player.Denominator.Denominator_Upgrades[1][1].gte(1)
                                                                                      ?   player.Denominator.Denominator_Upgrades[1][3]
                                                                                      :   1)
            player.Denominator.Data_Gain_Mul   = player.Denominator.Data_Gain_Mul.mul(player.Denominator.Denominator_Upgrades[6][1].gte(1)
                                                                                      ?   player.Numerator.Numerator_Multi
                                                                                      :   1)
            player.Denominator.Data_Gain_Mul   = player.Denominator.Data_Gain_Mul.mul(player.Infinity.Infinity_Upgrades[2][2])

            player.Denominator.Data_Gain_Base  = new Decimal(0)
            player.Denominator.Data_Gain_Base  = player.Denominator.Data_Gain_Base.add(player.Denominator.Variable[1][2])
            player.Denominator.Data_Gain_Total = player.Denominator.Data_Gain_Base.mul(player.Denominator.Data_Gain_Mul).pow(player.Denominator.Data_Gain_Exp)
            player.Denominator.Data   = player.Denominator.Data.add((player.Denominator.Data_Gain_Total).mul(diff))
    
            // Denominator Effect 相关函数--------------------------------------------------------------------------------------------------------------------
            player.Denominator.Denominator_Multi = player.Denominator.Data.max(5000).log(5000).pow(0.35) 
            player.Denominator.Denominator_Multi = player.Denominator.Denominator_Multi.mul(player.Denominator.Denominator_Upgrades[3][1].gte(1)
                                                                                            ?    1.25
                                                                                            :    1)
            
            player.Denominator.Denominator_Multi = player.Denominator.Denominator_Multi.mul(player.Infinity.Infinity_Upgrades[9][1].gte(1)
                                                                                            ?   player.Infinity.Infinity_Upgrades[9][2]
                                                                                            :   1)
            player.Denominator.Denominator_Multi = player.Denominator.Denominator_Multi.mul(player.Denominator.Variable[4][2].max(1))
            
            //
            if(player.Denominator.Change_Time.gte(0)) player.Denominator.Change_Time = player.Denominator.Change_Time.sub(diff)
        }  
    },

    doReset :  function(Resetting_Layer)
    {
        
    },

    milestones :
    {

    },

    bars:
    {
        Count:
        {
            fillStyle : {'background-color':'red'},
            baseStyle : {'background-color':'rgb(0,0,0,0)'},
            textStyle : {'color':'white'},
            direction : RIGHT,
            width     : 225,
            height    : 25,
            progress  : function()
            {
                return player.Denominator.Change_Time.div(30)
            },
            display   : function()
            {

            },
        }
    },

    clickables : (()=>
    {
        var Clickables = {}
        // Settings -------------------------------------------------------------------------------------------------------------------------------------------
        Clickables['Max'] = {}
        Clickables['Max'].title = function()
        {
            switch(player.Denominator.Denominator_Bought_Mode)
            {
                case 0: return 'No'; break
                case 1: return 'Yes'; break
            }
        }
        Clickables['Max'].canClick = function()
        {
            return true
        }
        Clickables['Max'].onClick = function()
        {
            switch(player.Denominator.Denominator_Bought_Mode)
            {
                case 0: player.Denominator.Denominator_Bought_Mode += 1; break
                case 1: player.Denominator.Denominator_Bought_Mode =  0; break
            }
        }
        Clickables['Max'].style = function()
        {
            var Style = {}
            Style['width']                = '250px'
            Style['height']               = '35px'
            Style['border']               = '3px solid white'
            Style['border-radius']        = '5px'
            Style['color']                = 'white'
            if(player.Denominator.Denominator_Bought_Mode >= 1) Style['background-color'] = 'DarkGreen'
            if(player.Denominator.Denominator_Bought_Mode == 0) Style['background-color'] = 'Red '
            return Style
        }

        // Clickables[1] Mid Button ---------------------------------------------------------------------------------------------------------------------------
        Clickables[1] = {}
        Clickables[1].title = function()
        {
            return '<h3>Imaginary Number'
        }
        Clickables[1].display = function()
        {
            var Input  = '<h2>Input<br>'    + format(player.Denominator.Imaginary_IO[1])  + '</h3>'
            var Output = '<h2>Output<br>'   + format(player.Denominator.Imaginary_IO[2].mul(100))  + '%</h3>'
            var Number = '<h2>Quantity<br>' + format(player.Denominator.Imaginary_Number) + '</h3>'
            return '-------------------------------------<br><br>' + Input + '<br><br>' + Output + '<br><br>' + Number
        }
        Clickables[1].canClick = function()
        {
            return true
        }
        Clickables[1].onClick = function()
        {
            switch(player.Denominator.Imaginary_IO[3])
            {
                case 1: player.Denominator.Imaginary_IO[3] = 0; break
                case 0: player.Denominator.Imaginary_IO[3] = 1; break
            }
        }
        Clickables[1].style = function()
        {
            var Style = {}
            Style['width']                = '250px'
            Style['height']               = '250px'
            Style['border']               = '3px solid white'
            Style['border-radius']        = '5px'
            Style['color']                = 'white'
            Style['background-color']     = 'black'
            if(player.Denominator.Imaginary_IO[3] == 1)
            {
                Style['background-color'] = 'DarkGreen'
            }
            return Style
        }

        // Clickables[2-5] Variabels --------------------------------------------------------------------------------------------------------------------------
        for(var I=2; I<=5; I++)
        {
            Clickables[I] = {}
            Clickables[I].title = function()
            {
                switch(this.id-0)
                {
                    case 2: return 'Variable X'; break
                    case 3: return 'Variable I'; break 
                    case 4: return 'Variable J'; break 
                    case 5: return 'Variable K'; break 
                }
            }
            Clickables[I].display = function()
            {
                switch(this.id-0)
                {
                    case 2:
                    {
                        var Discription = 'Produce DD.'
                        var Level = 'Length<br>' + format(player.Denominator.Variable[1][1])
                        var Effect = 'Effect<br>+' + format(player.Denominator.Variable[1][2]) + '/s'
                    }; break
                    case 3:
                    {
                        var Discription = 'Increase the multiple of DD. Gain'
                        var Level = 'Length<br>' + format(player.Denominator.Variable[2][1])
                        var Effect = 'Effect<br>×' + format(player.Denominator.Variable[2][2])
                    }; break
                    case 4:
                    {
                        var Discription = '<h3>Increase effect of [Larger Modulus] and [Denominator Multiples]'
                        var Level = 'Length<br>' + format(player.Denominator.Variable[3][1])
                        var Effect = 'Effect<br>×' + format(player.Denominator.Variable[3][2])
                    }; break
                    case 5:
                    {
                        var Discription = '<h3>Increase the multiples of DE.'
                        var Level = 'Length<br>' + format(player.Denominator.Variable[4][1])
                        var Effect = 'Effect<br>×' + format(player.Denominator.Variable[4][2])
                    }; break
                }
                return '<h3>--------------------<br>' + Discription + '<br><br>' + Level + '<br><br>' + Effect
            }
            Clickables[I].canClick = function()
            {
                if(player.Denominator.Denominator_Upgrades[7][1].gte(1))
                {
                    if(player.Denominator.Change_Time.lte(0)||(player.Denominator.Variable[this.id-1][4]>=1)) return player.Denominator.Variable[this.id-1][3]
                }
                if(player.Denominator.Denominator_Upgrades[7][1].lt(1))
                {
                    return player.Denominator.Variable[this.id-1][3]
                }
            }
            Clickables[I].onClick = function()
            {
                if(player.Denominator.Denominator_Upgrades[7][1].gte(1)&&(player.Denominator.Variable[this.id-1][4]<1)) player.Denominator.Change_Time = new Decimal(30)
                switch(player.Denominator.Variable[this.id-1][4])
                {
                    case 0: 
                    {
                        Clean_Output()
                        player.Denominator.Variable[this.id-1][4] = 1; break
                    }
                    case 1: player.Denominator.Variable[this.id-1][4] = 0; break
                }
            }
            Clickables[I].style = function()
            {
                var Style = {}
                Style['width']                = '200px'
                Style['height']               = '200px'
                Style['border']               = '3px solid white'
                Style['border-radius']        = '5px'
                Style['color']                = 'white'
                Style['background-color']     = 'black'
                if(player.Denominator.Variable[this.id-1][3] == 0)
                {
                    Style['opacity']          = '0'
                }
                if(player.Denominator.Variable[this.id-1][4] == 1)
                {
                    Style['background-color'] = 'DarkGreen'
                }
                return Style
            }
        }

        // Upgrades [1~3]--------------------------------------------------------------------------------------------------------------------------------------
        for(var I=11; I<13; I++)
        {
            Clickables[I] = {}
            Clickables[I].title = function()
            {
                switch(this.id-10)
                {
                    case 1: return 'Denominator Multiples'
                    case 2: return 'Larger Modulus'
                }
            }
            Clickables[I].display = function()
            {
                switch(this.id-10)
                {
                    case 1:
                    {
                        var Description = '<h3>Increse the multiple of DD. Gain'
                        var Effect      = '<h2>×' + format(player.Denominator.Denominator_Clickables[1][2]) + '</h2>'
                        var Price       = '<h2> ' + format(player.Denominator.Denominator_Clickables[1][3]) + ' DD.</h2>'
                    }; break
                    case 2:
                    {
                        var Description = '<h3>Increase the input amount of DD.'
                        var Effect      = '<h2>×' + format(player.Denominator.Denominator_Clickables[2][2]) + '</h2>'
                        var Price       = '<h2> ' + format(player.Denominator.Denominator_Clickables[2][3]) + ' DD.</h2>'
                    }; break
                }
                return '<h3>--------------------<br>' + Description + '<br><br>' + Effect + '<br><h3>--------------------</h3><br>' + Price
            }
            Clickables[I].canClick = function()
            {
                return player.Denominator.Denominator_Clickables[this.id-10][3].lte(player.Denominator.Data)
            }
            Clickables[I].onClick = function()
            {
                if(player.Denominator.Denominator_Clickables[this.id-10][3].lte(player.Denominator.Data))
                {
                    if(player.Denominator.Denominator_Bought_Mode == 1)
                    {
                        for(var I=5000;player.Denominator.Denominator_Clickables[this.id-10][3].lte(player.Denominator.Data)&&(I>=0); I--)
                        {
                            player.Denominator.Data = player.Denominator.Data.sub(player.Denominator.Denominator_Clickables[this.id-10][3])
                            player.Denominator.Denominator_Clickables[this.id-10][1] = player.Denominator.Denominator_Clickables[this.id-10][1].add(1)
                            eval('Denominator_Calculate_Upgrade_Price_Clickables_' + (this.id-10) + '()')
                        }
                        Denominator_Calculate_Upgrade_Price_And_Effect()
                    }
                    if(player.Denominator.Denominator_Bought_Mode == 0)
                    {
                        player.Denominator.Data                                  = player.Denominator.Data.sub(player.Denominator.Denominator_Clickables[this.id-10][3])
                        player.Denominator.Denominator_Clickables[this.id-10][1] = player.Denominator.Denominator_Clickables[this.id-10][1].add(1)
                    }
                }
            }
            Clickables[I].onHold = Clickables[I].onClick
            Clickables[I].style = function()
            {
                var Style = {}
                Style['width']                = '200px'
                Style['height']               = '200px'
                Style['border']               = '3px solid white'
                Style['border-radius']        = '5px'
                Style['color']                = 'white'
                Style['background-color']     = 'black'
                if(!this.canClick())
                {
                    Style['border']           = '3px solid #666666'
                    Style['color']            = '#666666'
                }
                return Style
            }
        }

        Clickables[13] = {}
        Clickables[13].title = function()
        {
            if(player.Denominator.Denominator_Clickables[3][1].eq(0)) return 'Binary Number'
            if(player.Denominator.Denominator_Clickables[3][1].eq(1)) return 'Quaternion'
            if(player.Denominator.Denominator_Clickables[3][1].eq(2)) return 'Biquaternion<br>(WIP)'
            if(player.Denominator.Denominator_Clickables[3][1].eq(3)) return 'Sedenion<br>(WIP)'
        }
        Clickables[13].display = function()
        {
            var Description = '<h3><br>Unlock Variable I<br>'
            if(player.Denominator.Denominator_Clickables[3][1] == 1) Description = '<h3><br>Unlock Variable J&K<br>'
            
            var Price       = '<h2> ' + format(player.Denominator.Denominator_Clickables[3][3]) + ' DD.</h2>'
            return '<h3>--------------------<br>' + Description + '<br><h3>--------------------</h3><br>' + Price
        },
        Clickables[13].canClick = function()
        {
            return (   player.Denominator.Denominator_Clickables[3][3].lte(player.Denominator.Data)
                    && player.Denominator.Denominator_Clickables[3][1].lte(3))
        }
        Clickables[13].onClick = function()
        {
            player.Denominator.Data                                  = player.Denominator.Data.sub(player.Denominator.Denominator_Clickables[this.id-10][3])
            player.Denominator.Denominator_Clickables[this.id-10][1] = player.Denominator.Denominator_Clickables[this.id-10][1].add(1)
        }
        Clickables[13].style = function()
        {
            var Style = {}
            Style['width']                = '200px'
            Style['height']               = '200px'
            Style['border']               = '3px solid white'
            Style['border-radius']        = '5px'
            Style['color']                = 'white'
            Style['background-color']     = 'black'
            if(!this.canClick())
            {
                Style['border']           = '3px solid #666666'
                Style['color']            = '#666666'
            }
            return Style
        }

        
        // Upgrades[10~20] ------------------------------------------------------------------------------------------------------------------------------------
        for(var I=21; I<=30; I++)
        {
            Clickables[I] = {}
            Clickables[I].title = '1/N(' + (I-20) + ')'
            Clickables[I].display = function()
            {
                switch(this.id-20)
                {
                    case 1: var Description = 'The modulus of entire variable increase the DD. gain<h3><br>×' + format(player.Denominator.Denominator_Upgrades[1][3]) ; break
                    case 2: var Description = 'Directly increase the exponent of DD. gain by 1.1'                                                                     ; break
                    case 3: var Description = 'Directly increase Denominator Effect by 1.25'                                                                          ; break
                    case 4: var Description = 'DE. also increase multiples of input amount of Imaginary Number'                                                       ; break
                    case 5: var Description = 'The smaller D-value between variables, the larger addition to exponent' ; break
                    case 6: var Description = '<h3>NE. increase the multiple of DD. gain<br><br><h1>BUT</h1><br><br><h3>NE. also decrease Input of Imaginary number<h3>' ; break
                    case 7: var Description = '<h3>Input of Imaginary number X10 <br><br><h1>BUT</h1><br><br><h3>You can only change the direction once every 30s' ; break
                    case 8: var Description = '<h3>The effect of all Variables X2<br><br><h1>BUT</h1><br><br><h3>The effect of the Variable with the smallest length X0.125' ; break
                                                               ; break
                }
                var Price       = '<h3> ' + format(player.Denominator.Denominator_Upgrades[this.id-20][2]) + ' DD.</h2>'
                if(player.Denominator.Denominator_Upgrades[this.id-20][1].gte(1)) Price = '<h3> Complete </h3>'
                if(this.id-20<=5) return '<h3>----------------<br>' + Description + '<br><h3>----------------</h3><br>' + Price
                if(this.id-20>=6) return '<h3>------------------------<br>' + Description + '<br><h3>------------------------</h3><br>' + Price
            
                return '<h3>----------------<br>' + Description + '<br><h3>----------------</h3><br>' + Price
            }
            Clickables[I].canClick = function()
            {
                return (   player.Denominator.Data.gte(player.Denominator.Denominator_Upgrades[this.id-20][2])
                        && player.Denominator.Denominator_Upgrades[this.id-20][1].lt(1))
            }
            Clickables[I].onClick = function()
            {
                player.Denominator.Data                                = player.Denominator.Data.sub(player.Denominator.Denominator_Upgrades[this.id-20][2])
                player.Denominator.Denominator_Upgrades[this.id-20][1] = player.Denominator.Denominator_Upgrades[this.id-20][1].add(1)
            }
            Clickables[I].style = function()
            {
                var Style = {}
                Style['width']                = '165px'
                Style['height']               = '165px'
                Style['border']               = '3px solid white'
                Style['border-radius']        = '5px'
                Style['color']                = 'white'
                Style['background-color']     = 'black'
                if(!this.canClick())
                {
                    Style['border']           = '3px solid #666666'
                    Style['color']            = '#666666'
                }
                if(player.Denominator.Denominator_Upgrades[this.id-20][1].gte(1))
                {
                    Style['color']            = 'white'
                    Style['border']           = '3px solid white'
                    Style['background-color'] = 'DarkGreen'
                }
                if(this.id-20>5)
                {
                    Style['width']            = '230px'
                    Style['height']           = '230px'
                }
                return Style
            }
        }
        Clickables[21].tooltip = 'Explanation<br>----------------------<br>The modulus of Variable calculated as follows: <br><br>The sum of the squares of all unlocked variables is then the square root of it.<br><br>The calculation results do not represent the final effect of this upgrade.'
        Clickables[25].tooltip = 'Explanation<br>----------------------<br>The D value mentioned here uses the calculation formula of variance: <br><br>The sum of squares of the difference between each sample and the mean divided by the total sample volume.<br><br>The calculation results do not represent the final effect of this upgrade.'

        return Clickables
    })()
})

function Clean_Output()
{
    for(var I=1; I<=4; I++)
    {
        player.Denominator.Variable[I][4] = 0
    }
}

function Denominator_Calculate_Upgrade_Price_And_Effect()
{
    Denominator_Calculate_Upgrade_Price_Clickables_1()
    Denominator_Calculate_Upgrade_Price_Clickables_2()
    Denominator_Calculate_Upgrade_Price_Clickables_3()
    player.Denominator.Denominator_Clickables[1][2] = player.Denominator.Denominator_Clickables[1][1].mul(0.05).add(1).max(1)
    player.Denominator.Denominator_Clickables[2][2] = player.Denominator.Denominator_Clickables[2][1].add(1).max(1)
    if(player.Denominator.Variable[3][3]==1) 
    {
        player.Denominator.Denominator_Clickables[1][2] = player.Denominator.Denominator_Clickables[1][2].mul(player.Denominator.Variable[3][2])
        player.Denominator.Denominator_Clickables[2][2] = player.Denominator.Denominator_Clickables[2][2].mul(player.Denominator.Variable[3][2])
    }
}

function Denominator_Calculate_Upgrade_Price_Clickables_1()
{
    player.Denominator.Denominator_Clickables[1][3] = new Decimal(1.25).pow(player.Denominator.Denominator_Clickables[1][1]).mul(25)
}

function Denominator_Calculate_Upgrade_Price_Clickables_2()
{
    player.Denominator.Denominator_Clickables[2][3] = player.Denominator.Denominator_Clickables[2][1].add(1).pow(2).mul(500).mul(new Decimal(Math.E).pow(player.Denominator.Denominator_Clickables[2][1].div(100)))
}

function Denominator_Calculate_Upgrade_Price_Clickables_3()
{
    if(player.Denominator.Denominator_Clickables[3][1] == 0) player.Denominator.Denominator_Clickables[3][3] = new Decimal(50000)
    if(player.Denominator.Denominator_Clickables[3][1] == 1) player.Denominator.Denominator_Clickables[3][3] = new Decimal(1e20)
    if(player.Denominator.Denominator_Clickables[3][1] == 2) player.Denominator.Denominator_Clickables[3][3] = new Decimal(Infinity)
    return 1
}