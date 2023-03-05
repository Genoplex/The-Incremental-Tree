addLayer('Numerator',
{
    name          : 'Numerator',
    symbol        : '<h6>N(x)/1</h6>',
    resource      : '无',
    baseResource  : '数字代币',
    baseAmount    :  function()
    {
        return player.points
    },
    color         : 'DeepSkyBlue',
    type          : 'normal',
    exponent      :  1,
    position      :  0,
    row           :  1,
    requires      :  new Decimal(Infinity),
    branches      :  function()
    {
        switch(player.Number.Stage)
        {
            case 1:
            case 2: 
            case 3: return ['Number']; break
            default: break;
        }
    },

    resetDescription : '',

    hotkeys : 
    [

    ],

    tooltip :  function()
    {
        return 'NI: ' + format(player.Numerator.Information) + '<br>Effect: ×' + format(player.Numerator.Numerator_Multi)
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
                                    ['display-text','<h2>Numerator Information</h2>'],
                                    'blank',
                                    ['display-text','<h1>' + format(player.Numerator.Information + '</h1>')],],{'height':'90px','width':'350px','border':'3px white solid'}],
                                ['column',[
                                    ['display-text','<h1 style="font-size:50px">→</h1>']],{'width':'50px'}],
                                ['column',[
                                    ['display-text','<h2>Numerator Effect</h2>'],
                                    'blank',
                                    ['display-text','<h1>' + format(player.Numerator.Numerator_Multi + '</h1>')],],{'height':'90px','width':'350px','border':'3px white solid'}],],{}])
                Format.push(['row',[
                                ['column',[
                                    ['display-text','<h1 style="font-size:50px">↑</h1>'],
                                    ['column',[
                                        ['display-text','<h2>NI. Gain</h2>'],
                                        'blank',
                                        ['display-text','<h1>+' + format(player.Numerator.Information_Gain_Total) + '/s</h1>'],],{'height':'90px','width':'350px','border':'3px white solid'}],],{'width':'350px'}],
                                ['column',,{'width':'410px'}],],{}])
                Format.push(['row',[
                                ['column',[
                                    ['display-text','<h1 style="font-size:50px">↑</h1>'],],{'width':'350px'}],
                                ['column',[
                                    ['column',[
                                        ['column',[
                                            ['display-text','<h1>×' + format(player.Numerator.Information_Gain_Mul) + ',^' + format(player.Numerator.Information_Gain_Exp)]],{'position':'absolute','left':'0'}],],{'width':'300px','transform':'translate(-215px,-14px)'}]],{'width':'405px'}],],{}])
                Format.push(['h-line','900px'])
                Format.push(['row',[
                                ['row',[
                                    ['display-text','<h3>Iteration</h3>'],],{'width':'150px'}],
                                ['row',[
                                    ['display-text','<h3>Output</h3>'   ],],{'width':'200px'}],
                                ['row',[
                                    ['display-text','<h3>Level</h3>'    ],],{'width':'250px'}],
                                ['row',[
                                    ['display-text','<h3>Price</h3>'    ],],{'width':'300px'}]],{'height':'50px','background-color':'#222222'}])
                for(var I=1; I<=8; I=I+2)
                {
                    if(player.Numerator.Digital_Iteration[I][4])
                        Format.push(['row',[
                                        ['column',[
                                            ['display-text','<h3>' + formatWhole(I)]],{'width':'150px'}],
                                        ['column',[
                                            ['display-text','<h3> +' + format(player.Numerator.Digital_Iteration[I][2]) + '/s</h3>' + (player.Numerator.Numerator_Upgrades[3][1].gte(1)?'<br>(+' + format(player.Numerator.Digital_Iteration[I][1].mul(I)) + '%)':'')]],{'width':'200px'}],
                                        ['column',[
                                            ['display-text','<h3>'+ formatWhole(player.Numerator.Digital_Iteration[I][1]) + '</h3>']],{'width':'250px'}],
                                        ['column',[
                                            ['clickable',I],],{'width':'300px'}],],{'height':'50px','background-color':'#333333'}])
                    if(player.Numerator.Digital_Iteration[I+1][4])
                        Format.push(['row',[
                                        ['column',[
                                            ['display-text','<h3>' + formatWhole(I+1)]],{'width':'150px'}],
                                        ['column',[
                                            ['display-text','<h3> +' + format(player.Numerator.Digital_Iteration[I+1][2]) + '/s</h3>' + (player.Numerator.Numerator_Upgrades[3][1].gte(1)?'<br>(+' + format(player.Numerator.Digital_Iteration[I+1][1].mul(I+1)) + '%)':'')]],{'width':'200px'}],
                                        ['column',[
                                            ['display-text','<h3>'+ formatWhole(player.Numerator.Digital_Iteration[I+1][1]) + '</h3>']],{'width':'250px'}],
                                        ['column',[
                                            ['clickable',I+1],],{'width':'300px'}],],{'height':'50px','background-color':'#222222'}])
                }
                return Format
            }
        },
        'Upgrades':
        {
            unlocked : function()
            {
                return player.Number.Stage > 1
            },
            content : function()
            {
                var Format = []

                Format.push(['row',[
                                ['column',[
                                    ['display-text','<h2>Numerator Information</h2>'],
                                    'blank',
                                    ['display-text','<h1>' + format(player.Numerator.Information + '</h1>')],],{'height':'90px','width':'350px','border':'3px white solid'}],
                                ['column',[
                                    ['display-text','<h1 style="font-size:50px">←</h1>']],{'width':'50px'}],
                                ['column',[
                                        ['display-text','<h2>NI. Gain</h2>'],
                                        'blank',
                                        ['display-text','<h1>+' + format(player.Numerator.Information_Gain_Total) + '/s</h1>'],],{'height':'90px','width':'350px','border':'3px white solid'}],],{}])
                Format.push(['row',[
                                ['column',[
                                    ['display-text','<h1 style="font-size:50px">↓</h1>'],],{'width':'350px'}],
                                ['column',[
                                    ['column',,{'width':'300px','transform':'translate(-215px,-14px)'}]],{'width':'405px'}],],{}])
                Format.push(['h-line','900px'])
                Format.push('blank','blank','blank')
                Format.push(['row',[
                                ['clickable',11],
                                ['column',,{'width':'18px'}],
                                ['clickable',12]],{}])
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
        unlocked               : true,
		points                 : new Decimal(0),
        Stop                   : 0,
        Reset                  : 0,
        Reset_Mention_Time     : new Decimal(5),

        Information            : new Decimal(10),
        Information_Gain_Base  : new Decimal(0),
        Information_Gain_Mul   : new Decimal(1),
        Information_Gain_Exp   : new Decimal(1),
        Information_Gain_Total : new Decimal(0),

        Numerator_Multi        : new Decimal(1),
    
                                 // 0.PlaceHolder, 1.Level,        2.Gain,         3.Price,        4.Unlock,
        Digital_Iteration      :[0,[0,             new Decimal(0), new Decimal(0), new Decimal(0), 1,      ],    // 1
                                   [0,             new Decimal(0), new Decimal(0), new Decimal(0), 0,      ],    // 2
                                   [0,             new Decimal(0), new Decimal(0), new Decimal(0), 0,      ],    // 3
                                   [0,             new Decimal(0), new Decimal(0), new Decimal(0), 0,      ],    // 4
                                   [0,             new Decimal(0), new Decimal(0), new Decimal(0), 0,      ],    // 5
                                   [0,             new Decimal(0), new Decimal(0), new Decimal(0), 0,      ],    // 6
                                   [0,             new Decimal(0), new Decimal(0), new Decimal(0), 0,      ],    // 7
                                   [0,             new Decimal(0), new Decimal(0), new Decimal(0), 0,      ],],  // 8

                                 // 0.PlaceHolder, 1.Level,        2.Effect,       3.Price
        Numerator_Clickables   :[0,[0,             new Decimal(0), new Decimal(0), new Decimal(0)],    // 11
                                   [0,             new Decimal(0), new Decimal(0), new Decimal(0)],    // 12
                                   [0,             new Decimal(0), new Decimal(0), new Decimal(0)],],  // 13

                                 // 0.PlaceHolder, 1.Level,        2.Price,        3.Effect
        Numerator_Upgrades     :[0,[0,             new Decimal(0), new Decimal(0), new Decimal(0)],  // 21
                                   [0,             new Decimal(0), new Decimal(0), new Decimal(0)],  // 22
                                   [0,             new Decimal(0), new Decimal(0), new Decimal(0)],  // 23
                                   [0,             new Decimal(0), new Decimal(0), new Decimal(0)],  // 24
                                   [0,             new Decimal(0), new Decimal(0), new Decimal(0)],  // 25
                                   [0,             new Decimal(0), new Decimal(0), new Decimal(0)],  // 26
                                   [0,             new Decimal(0), new Decimal(0), new Decimal(0)],  // 27
                                   [0,             new Decimal(0), new Decimal(0), new Decimal(0)],  // 28
                                   [0,             new Decimal(0), new Decimal(0), new Decimal(0)],  // 29
                                   [0,             new Decimal(0), new Decimal(0), new Decimal(0)],],// 30

        
        Numerator_Bought_Mode  : 0,
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
        
        if(!player.Numerator.Stop)
        {
            // Numerator Clickables 相关函数 --------------------------------------------------------------------------------
            Numerator_Calculate_Upgrade_Price_And_Effect()
            
            // Numerator Upgrade 相关函数 -----------------------------------------------------------------------------------
            var Total_For_Row1 = new Decimal(0)
            var Price_For_Row1 = new Decimal(0)
            for(var I=1; I<=5; I++)
            {
                Total_For_Row1 = Total_For_Row1.add(player.Numerator.Numerator_Upgrades[I][1])
            }
            if(Total_For_Row1.eq(0)) Price_For_Row1 = new Decimal(50000)
            if(Total_For_Row1.eq(1)) Price_For_Row1 = new Decimal(700000)
            if(Total_For_Row1.eq(2)) Price_For_Row1 = new Decimal(9800000)
            if(Total_For_Row1.eq(3)) Price_For_Row1 = new Decimal(137200000)
            if(Total_For_Row1.eq(4)) Price_For_Row1 = new Decimal(1920800000)
            for(var I=1; I<=5; I++)
            {
                player.Numerator.Numerator_Upgrades[I][2] = Price_For_Row1
            }

            Total_For_Row2 = new Decimal(0)
            Price_For_Row2 = new Decimal(0)
            for(var I=6; I<=8; I++)
            {
                Total_For_Row2 = Total_For_Row2.add(player.Numerator.Numerator_Upgrades[I][1])
            }
            if(Total_For_Row2.eq(0)) Price_For_Row2 = new Decimal(1e18)
            if(Total_For_Row2.eq(1)) Price_For_Row2 = new Decimal(1e20)
            if(Total_For_Row2.eq(2)) Price_For_Row2 = new Decimal(1e22)
            for(var I=6; I<=8; I++)
            {
                player.Numerator.Numerator_Upgrades[I][2] = Price_For_Row2
            }

            var Total_For_f6 = new Decimal(0)
            var Buff_For_f6 = new Decimal(0)
            var Debuff_For_f6 = new Decimal(0)
            for(var I=1; I<=8; I++)
            {
                Total_For_f6 = Total_For_f6.add(player.Numerator.Numerator_Upgrades[I][1])
            }
            Buff_For_f6 = new Decimal(1.25).pow(Total_For_f6)
            Debuff_For_f6 = new Decimal(1/3).pow(new Decimal(8).sub(Total_For_f6))


            // Digital Iteration 相关函数------------------------------------------------------------------------------------
            for(var I=2; I<=8; I++)
            {
                if(player.Numerator.Digital_Iteration[I-1][1].gte(1))
                player.Numerator.Digital_Iteration[I][4] = 1
            }
        
            Numerator_Calculate_Iteration_Price_And_Effect()

        
            // Numerator Information 相关函数 -------------------------------------------------------------------------------
            player.Numerator.Information_Gain_Exp  = new Decimal(1)
            player.Numerator.Information_Gain_Exp  = player.Numerator.Information_Gain_Exp.mul(player.Numerator.Numerator_Upgrades[1][1].gte(1)
                                                                                               ?   1.05
                                                                                               :   1)
            player.Numerator.Information_Gain_Exp  = player.Numerator.Information_Gain_Exp.mul(player.Infinity.Infinity_Upgrades[8][2])
                                                                                               
            player.Numerator.Information_Gain_Mul  = new Decimal(1)
            player.Numerator.Information_Gain_Mul  = player.Numerator.Information_Gain_Mul.mul(player.Numerator.Numerator_Clickables[1][2])
            player.Numerator.Information_Gain_Mul  = player.Numerator.Information_Gain_Mul.mul(player.Numerator.Numerator_Upgrades[4][1].gte(1)
                                                                                               ?   player.Numerator.Numerator_Multi
                                                                                               :   1)
            if(player.Number.Stage>2)
            {
                player.Numerator.Information_Gain_Mul  = player.Numerator.Information_Gain_Mul.mul(player.Infinity.Infinity_Upgrades[2][2])
            }
            player.Numerator.Information_Gain_Mul  = player.Numerator.Information_Gain_Mul.mul(player.Numerator.Numerator_Upgrades[7][1].gte(1)
                                                                                               ?   player.Denominator.Denominator_Multi
                                                                                               :   1)
            player.Numerator.Information_Gain_Mul  = player.Numerator.Information_Gain_Mul.mul(player.Numerator.Numerator_Upgrades[6][1].gte(1)
                                                                                               ?   Buff_For_f6.mul(Debuff_For_f6)
                                                                                               :   1)

            player.Numerator.Information_Gain_Base = new Decimal(0)
            for(var I=1; I<=8; I++) player.Numerator.Information_Gain_Base = player.Numerator.Information_Gain_Base.add(player.Numerator.Digital_Iteration[I][2])
            player.Numerator.Information_Gain_Total = player.Numerator.Information_Gain_Base.mul(player.Numerator.Information_Gain_Mul).pow(player.Numerator.Information_Gain_Exp)
            player.Numerator.Information   = player.Numerator.Information.add((player.Numerator.Information_Gain_Total).mul(diff))
    
            // Numerator Effect 相关函数 ------------------------------------------------------------------------------------
            player.Numerator.Numerator_Multi = player.Numerator.Information.max(1500).log(1500).pow(0.5)
            player.Numerator.Numerator_Multi = player.Numerator.Numerator_Multi.mul(player.Numerator.Numerator_Upgrades[2][1].gte(1)
                                                                                    ?   1.25
                                                                                    :   1)
            player.Numerator.Numerator_Multi = player.Numerator.Numerator_Multi.mul(player.Infinity.Infinity_Upgrades[9][1].gte(1)
                                                                                    ?   player.Infinity.Infinity_Upgrades[9][2]
                                                                                    :   1)
            
            // Numerator SelfReset 相关函数 ---------------------------------------------------------------------------------
            if(player.Numerator.Reset == 1)  player.Numerator.Reset_Mention_Time = player.Numerator.Reset_Mention_Time.sub(diff)
            if(player.Numerator.Reset_Mention_Time.lt(0))
            {
                player.Numerator.Reset = 0
                player.Numerator.Reset_Mention_Time = new Decimal(5)
            }
        }
    },

    doReset :  function(Resetting_Layer)
    {
        
    },

    milestones :
    {

    },

    clickables :  (()=>
    {
        var Clickables = {}
        // Settings -------------------------------------------------------------------------------------------------------------------------------------------
        Clickables['Max'] = {}
        Clickables['Max'].title = function()
        {
            switch(player.Numerator.Numerator_Bought_Mode)
            {
                case 0: return 'No'; break
                case 1: return 'Spend Half'; break
                case 2: return 'Yes'; break
            }
        },
        Clickables['Max'].canClick = function()
        {
            return true
        }
        Clickables['Max'].onClick = function()
        {
            switch(player.Numerator.Numerator_Bought_Mode)
            {
                case 0: 
                case 1: player.Numerator.Numerator_Bought_Mode += 1; break
                case 2: player.Numerator.Numerator_Bought_Mode =  0; break
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
            if(player.Numerator.Numerator_Bought_Mode >= 1) Style['background-color'] = 'DarkGreen'
            if(player.Numerator.Numerator_Bought_Mode == 0) Style['background-color'] = 'Red '
            return Style
        }

        Clickables['Reset'] = {}
        Clickables['Reset'].title = function()
        {
            return 'Yes'
        },
        Clickables['Reset'].canClick = function()
        {
            return true
        }
        Clickables['Reset'].onClick = function()
        {
            switch(player.Numerator.Reset)
            {
                case 0: player.Numerator.Reset += 1; break
                case 1: layerDataReset('Numerator'); break
            }
        }
        Clickables['Reset'].style = function()
        {
            var Style = {}
            Style['width']                = '180px'
            Style['height']               = '35px'
            Style['border']               = '3px solid white'
            Style['border-radius']        = '5px'
            Style['color']                = 'white'
            Style['background-color']     = 'black'
            return Style
        }

        // Digital_Iteration[1] -------------------------------------------------------------------------------------------------------------------------------
        Clickables[1] = {}
        Clickables[1].title = function()
        {
            return formatWhole(player.Numerator.Digital_Iteration[1][3]) + ' NI.'
        }
        Clickables[1].canClick = function()
        {
            return player.Numerator.Information.gte(player.Numerator.Digital_Iteration[1][3])
        }
        Clickables[1].onClick = function()
        {
            if(player.Numerator.Information.gte(player.Numerator.Digital_Iteration[1][3]))
            {
                if(player.Numerator.Numerator_Bought_Mode >= 1)
                {
                    var Bought = new Decimal(0)
                    var Spend = player.Numerator.Information
                    if (player.Numerator.Numerator_Bought_Mode == 1) Spend = Spend.div(2)
                    player.Numerator.Information = player.Numerator.Information.sub(Spend)
                    for(;player.Numerator.Digital_Iteration[1][3].lte(Spend);)
                    {
                        Spend = Spend.sub(player.Numerator.Digital_Iteration[1][3])
                        player.Numerator.Digital_Iteration[1][1] = player.Numerator.Digital_Iteration[1][1].add(1)
                        Numerator_Calculate_Iteration_Price_And_Effect()
                        Bought = Bought.add(1)
                    }
                    player.Numerator.Information = player.Numerator.Information.add(Spend)
                    if(Bought.eq(0))
                    {
                        player.Numerator.Information             = player.Numerator.Information.sub(player.Numerator.Digital_Iteration[1][3])
                        player.Numerator.Digital_Iteration[1][1] = player.Numerator.Digital_Iteration[1][1].add(1)
                        Numerator_Calculate_Iteration_Price_And_Effect()
                    }
                }
                if(player.Numerator.Numerator_Bought_Mode == 0)
                {
                    player.Numerator.Information             = player.Numerator.Information.sub(player.Numerator.Digital_Iteration[1][3])
                    player.Numerator.Digital_Iteration[1][1] = player.Numerator.Digital_Iteration[1][1].add(1)
                }
            }
        }
        Clickables[1].onHold = Clickables[1].onClick
        Clickables[1].style = function()
        {
            var Style = {}
            Style['width']                = '225px'
            Style['height']               = '40px'
            Style['border']               = '3px solid #666666'
            Style['border-radius']        = '5px'
            Style['color']                = '#666666'
            if(this.canClick())
            {
                Style['border']           = '3px solid white'
                Style['color']            = 'white'
                Style['background-color'] = 'black'
            }
            return Style
        }

        // Digital_Iteration[2~8] -----------------------------------------------------------------------------------------------------------------------------
        for(var I=1; I<8; I++)
        {
            var Title = 1 + I
            Clickables[Title] = {}
            Clickables[Title].title = function()
            {
                var Title = formatWhole(player.Numerator.Digital_Iteration[this.id][3]) + ' No.' + (this.id-1)
                return Title
            }
            Clickables[Title].canClick = function()
            {
                return player.Numerator.Digital_Iteration[this.id-1][1].gte(player.Numerator.Digital_Iteration[this.id][3])
            }
            Clickables[Title].onClick = function()
            {
                if(player.Numerator.Digital_Iteration[this.id-1][1].gte(player.Numerator.Digital_Iteration[this.id][3]))
                {
                    if(player.Numerator.Numerator_Bought_Mode >= 1)
                    {
                        var Bought = new Decimal(0)
                        var Spend = player.Numerator.Digital_Iteration[this.id-1][1]
                        if (player.Numerator.Numerator_Bought_Mode == 1) Spend = Spend.div(2)
                        player.Numerator.Digital_Iteration[this.id-1][1] = player.Numerator.Digital_Iteration[this.id-1][1].sub(Spend)
                        for(;player.Numerator.Digital_Iteration[this.id][3].lte(Spend);)
                        {
                            Spend                                          = Spend.sub(player.Numerator.Digital_Iteration[this.id][3])
                            player.Numerator.Digital_Iteration[this.id][1] = player.Numerator.Digital_Iteration[this.id][1].add(1)
                            Numerator_Calculate_Iteration_Price_And_Effect()
                            Bought = Bought.add(1)
                        }
                        player.Numerator.Digital_Iteration[this.id-1][1] = player.Numerator.Digital_Iteration[this.id-1][1].add(Spend)
                        if(Bought.eq(0))
                        {
                            player.Numerator.Digital_Iteration[this.id-1][1] = player.Numerator.Digital_Iteration[this.id-1][1].sub(player.Numerator.Digital_Iteration[this.id][3])
                            player.Numerator.Digital_Iteration[this.id][1]   = player.Numerator.Digital_Iteration[this.id][1].add(1)
                            Numerator_Calculate_Iteration_Price_And_Effect()
                        }
                    }
                    if(player.Numerator.Numerator_Bought_Mode == 0)
                    {
                        player.Numerator.Digital_Iteration[this.id-1][1] = player.Numerator.Digital_Iteration[this.id-1][1].sub(player.Numerator.Digital_Iteration[this.id][3])
                        player.Numerator.Digital_Iteration[this.id][1] = player.Numerator.Digital_Iteration[this.id][1].add(1)
                    }
                }
            }
            Clickables[Title].onHold = Clickables[Title].onClick
            Clickables[Title].style = function()
            {
                var Style = {}
                Style['width']                = '225px'
                Style['height']               = '40px'
                Style['border']               = '3px solid #666666'
                Style['border-radius']        = '5px'
                Style['color']                = '#666666'
                if(this.canClick())
                {
                    Style['border']           = '3px solid white'
                    Style['color']            = 'white'
                    Style['background-color'] = 'black'
                }
                return Style
            }
        }

        // Upgrades[1~3] ----------------------------------------------------------------------------------------------------
        for(var I=11; I<13; I++)
        {
            Clickables[I] = {}
            Clickables[I].title = function()
            {
                switch(this.id-10)
                {
                    case 1: return 'Numerator Multiples'     ; break
                    case 2: return 'Shorter Iteration Length'; break
                }
            }
            Clickables[I].display = function()
            {
                switch(this.id-10)
                {
                    case 1:
                    {
                        var Description = '<h3>Increse the multiple of NI. Gain'
                        var Effect      = '<h2>×' + format(player.Numerator.Numerator_Clickables[1][2]) + '</h2>'
                        var Price       = '<h2> ' + format(player.Numerator.Numerator_Clickables[1][3]) + ' NI.</h2>'
                    }; break
                    case 2:
                    {
                        var Description = '<h3>Decrease the price of iterations'
                        var Effect      = '<h2>÷' + format(player.Numerator.Numerator_Clickables[2][2]) + '</h2>'
                        var Price       = '<h2> ' + format(player.Numerator.Numerator_Clickables[2][3]) + ' NI.</h2>'
                    }; break
                }
                return '<h3>--------------------<br>' + Description + '<br><br>' + Effect + '<br><h3>--------------------</h3><br>' + Price
            }
            Clickables[I].canClick = function()
            {
                return player.Numerator.Numerator_Clickables[this.id-10][3].lte(player.Numerator.Information)
            }
            Clickables[I].onClick = function()
            {
                if(player.Numerator.Numerator_Clickables[this.id-10][3].lte(player.Numerator.Information))
                {
                    if(player.Numerator.Numerator_Bought_Mode >= 1)
                    {
                        var Bought = new Decimal(0)
                        var Spend = player.Numerator.Information
                        if(player.Numerator.Numerator_Bought_Mode == 1) Spend = Spend.div(2)
                        player.Numerator.Information = player.Numerator.Information.sub(Spend)
                        for(var I=10000;player.Numerator.Numerator_Clickables[this.id-10][3].lte(Spend)&&(I>=0);I--)
                        {
                            Spend = Spend.sub(player.Numerator.Numerator_Clickables[this.id-10][3])
                            player.Numerator.Numerator_Clickables[this.id-10][1] = player.Numerator.Numerator_Clickables[this.id-10][1].add(1)
                            eval('Numerator_Calculate_Upgrade_Price_Clickables_' + (this.id-10) + '()')
                            Bought = Bought.add(1)
                        }
                        player.Numerator.Information = player.Numerator.Information.add(Spend)
                        if(Bought.eq(0))
                        {
                            player.Numerator.Information                         = player.Numerator.Information.sub(player.Numerator.Numerator_Clickables[this.id-10][3])
                            player.Numerator.Numerator_Clickables[this.id-10][1] = player.Numerator.Numerator_Clickables[this.id-10][1].add(1)
                            eval('Numerator_Calculate_Upgrade_Price_Clickables_' + (this.id-10) + '()')
                        }
                        Numerator_Calculate_Upgrade_Price_And_Effect()
                    }
                    if(player.Numerator.Numerator_Bought_Mode == 0)
                    {
                        player.Numerator.Information                         = player.Numerator.Information.sub(player.Numerator.Numerator_Clickables[this.id-10][3])
                        player.Numerator.Numerator_Clickables[this.id-10][1] = player.Numerator.Numerator_Clickables[this.id-10][1].add(1)
                    }
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
                if(!this.canClick())
                {
                    Style['border']           = '3px solid #666666'
                    Style['color']            = '#666666'
                }
                return Style
            }
        }
        Clickables[12].tooltip = 'Addition<br>----------------------<br>The effect of this upgrade will decrease as the number of iteration layers increases.<br><br>For instance: <br>50% for Iteration 2, 33% for Iteration 3, etc.'
            

        // Upgrades[10~20] --------------------------------------------------------------------------------------------------------------------------------------
        for(var I=21; I<=30; I++)
        {
            Clickables[I] = {}
            Clickables[I].title = 'f(' + (I-20) + ')'
            Clickables[I].display = function()
            {
                switch(this.id-20)
                {
                    case 1: var Description = '<h3>Directly increase the exponent of NI. Gain by 1.05</h3>'        ; break
                    case 2: var Description = '<h3>Directly increase Numerator Effect by 1.25</h3>'                ; break
                    case 3: var Description = '<h3>Increase Iteration output according its level</h3>'    ; break
                    case 4: var Description = '<h3>NE.×2 increase multiple of NI. Gain</h3>'                ; break
                    case 5: var Description = '<h3>Iteration output ×5 if its level is a multiple of 5</h3>'; break
                    case 6: var Description = '<h3>f(x) you bought increase the multiple of NI. gain by ×1.25<br><br><h1>BUT</h1><br><br><h3>f(x) you haven\'t bought descrease the multiple of NI. gain by 1/3' ; break
                    case 7: var Description = '<h3>DE. multiply the multiple of NI. gain<br><br><h1>BUT</h1><br><br><h3>DE. also multiply the price of iterations' ; break
                    case 8: var Description = '<h3>Iteration output ×4 if its level is even<br><br><h1>BUT</h1><br><br><h3>Iteration output ^0.5 if its level is odd' ; break
                }
                var Price       = '<h3> ' + format(player.Numerator.Numerator_Upgrades[this.id-20][2]) + ' NI.</h2>'
                if(player.Numerator.Numerator_Upgrades[this.id-20][1].gte(1)) Price = '<h3> Complete </h3>'
                if(this.id-20<=5) return '<h3>----------------<br>' + Description + '<br><h3>----------------</h3><br>' + Price
                if(this.id-20>=6) return '<h3>------------------------<br>' + Description + '<br><h3>------------------------</h3><br>' + Price
            }
            Clickables[I].canClick = function()
            {
                return (   player.Numerator.Information.gte(player.Numerator.Numerator_Upgrades[this.id-20][2])
                        && player.Numerator.Numerator_Upgrades[this.id-20][1].lt(1))
            }
            Clickables[I].onClick = function()
            {
                player.Numerator.Information                       = player.Numerator.Information.sub(player.Numerator.Numerator_Upgrades[this.id-20][2])
                player.Numerator.Numerator_Upgrades[this.id-20][1] = player.Numerator.Numerator_Upgrades[this.id-20][1].add(1)
                if((this.id-20==7)&&(player.Numerator.Information_Gain_Total.eq(0)))
                {
                    player.Numerator.Digital_Iteration[1][1] = new Decimal(1)
                }
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
                if(player.Numerator.Numerator_Upgrades[this.id-20][1].gte(1))
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
        Clickables[27].tooltip = 'Special QoL<br>----------------------<br>If NI. Gain is 0 when this upgrade is bought, this upgrade will give an extra Iteration No.1'

        // onHold 函数 ------------------------------------------------------------------------------------------------------
        for (var I in Clickables)
        {
            Clickables[I].onHold = Clickables[I].onClick
        }

        return Clickables
    })()
})

function Numerator_Calculate_Iteration_Price_And_Effect()
{
    for(var I=1; I<=8; I++)
    {
        // Digital Iteration Output -----------------------------------------------------------------------------------------
        player.Numerator.Digital_Iteration[I][2] = player.Numerator.Digital_Iteration[I][1].mul(new Decimal(I).pow(3))
        player.Numerator.Digital_Iteration[I][2] = player.Numerator.Digital_Iteration[I][2].mul(player.Numerator.Numerator_Upgrades[3][1].gte(1)
                                                                                                ?   player.Numerator.Digital_Iteration[I][1].div(100).add(1).mul(I)
                                                                                                :   1)
        player.Numerator.Digital_Iteration[I][2] = player.Numerator.Digital_Iteration[I][2].mul(player.Numerator.Numerator_Upgrades[5][1].gte(1)
                                                                                                ?   player.Numerator.Digital_Iteration[I][1].sub(player.Numerator.Digital_Iteration[I][1].div(5).floor().mul(5)).eq(0)
                                                                                                    ?   5
                                                                                                    :   1
                                                                                                :   1)
        if(player.Numerator.Numerator_Upgrades[8][1].gte(1))
        {
            if(player.Numerator.Digital_Iteration[I][1].sub(player.Numerator.Digital_Iteration[I][1].div(2).floor().mul(2)).eq(0))
            {
                player.Numerator.Digital_Iteration[I][2] = player.Numerator.Digital_Iteration[I][2].mul(4)
            }
            else
            {
                player.Numerator.Digital_Iteration[I][2] = player.Numerator.Digital_Iteration[I][2].pow(0.5)
            }
        }

        // Digital Iteration price ------------------------------------------------------------------------------------------
        player.Numerator.Digital_Iteration[I][3] = new Decimal(Math.E).pow(new Decimal(0.125).mul(player.Numerator.Digital_Iteration[I][1])).mul(10)
        player.Numerator.Digital_Iteration[I][3] = player.Numerator.Digital_Iteration[I][3].div(player.Numerator.Numerator_Clickables[2][2].div(I).max(1))
        player.Numerator.Digital_Iteration[I][3] = player.Numerator.Digital_Iteration[I][3].div(player.Infinity.Infinity_Upgrades[6][2].div(I).max(1))
        player.Numerator.Digital_Iteration[I][3] = player.Numerator.Digital_Iteration[I][3].mul(player.Numerator.Numerator_Upgrades[7][1].gte(1)
                                                                                                ?   player.Denominator.Denominator_Multi
                                                                                                :   1)
        player.Numerator.Digital_Iteration[I][3] = player.Numerator.Digital_Iteration[I][3].ceil()
        if(player.Numerator.Digital_Iteration[I][1].lt(0))  player.Numerator.Digital_Iteration[I][1] = new Decimal(0)
    }
}

function Numerator_Calculate_Upgrade_Price_And_Effect()
{
    Numerator_Calculate_Upgrade_Price_Clickables_1()
    Numerator_Calculate_Upgrade_Price_Clickables_2()
    player.Numerator.Numerator_Clickables[1][2] = player.Numerator.Numerator_Clickables[1][1].mul(0.05).add(1).max(1)
    player.Numerator.Numerator_Clickables[2][2] = player.Numerator.Numerator_Clickables[2][1].mul(0.01).add(1).max(1)
}

function Numerator_Calculate_Upgrade_Price_Clickables_1()
{
    player.Numerator.Numerator_Clickables[1][3] = player.Numerator.Numerator_Clickables[1][1].add(1).pow(1.15).mul(100).mul(new Decimal(Math.E).pow(player.Numerator.Numerator_Clickables[1][1].div(200)))
}

function Numerator_Calculate_Upgrade_Price_Clickables_2()
{
    player.Numerator.Numerator_Clickables[2][3] = new Decimal(1.02).pow(player.Numerator.Numerator_Clickables[2][1]).mul(120)
}