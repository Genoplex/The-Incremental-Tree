addLayer('Infinity',
{
    name          : 'Infinity',
    symbol        : '<h6><font style="color:white">Inf.</h6>',
    resource      : '无',
    baseResource  : '数字代币',
    baseAmount    :  function()
    {
        return player.points
    },
    color         : 'black',
    type          : 'normal',
    exponent      :  1,
    position      :  2,
    row           :  0,
    requires      :  new Decimal(Infinity),
    branches      :  function()
    {
        switch(player.Number.Stage)
        {
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
        return 'IP: ' + format(player.Infinity.Points)
    },

    tabFormat :
    {
        'Upgrades':
        {
            unlocked : true,
            content  : function()
            {
                var Format = []
                Format.push(['row',[
                                ['column',[
                                    ['display-text','<h2>IP. Generator</h2>'],
                                    'blank',
                                    ['display-text','<h1>+' + format(player.Infinity.Auto_Points_Gain)  + '/s</h1>'],],{'height':'90px','width':'350px','border':'3px white solid'}],
                                ['column',[
                                    ['display-text','<h1 style="font-size:50px">←</h1>']],{'width':'50px'}],
                                ['clickable','Reset'],],{}])
                Format.push(['row',[
                                ['column',[
                                    ['display-text','<h1 style="font-size:50px">↓</h1>'],],{'width':'30px','transform':'translate(-20px,0px)'}],
                                ['column',[
                                    ['display-text','<h1 style="font-size:50px">↙</h1>'],],{'width':'30px','transform':'translate(145px,0px)'}],
                                ['column',[
                                    ['display-text','<h1 style="font-size:50px">↑</h1>'],],{'width':'30px','transform':'translate(180px,0px)'}],
                                ['column',[
                                    ['column',[
                                        ['column',[
                                            ['display-text','<h1>Next:' + format(player.Infinity.Next_Need)]],{'position':'absolute','left':'230'}],],{'width':'300px','transform':'translate(30px,-15px)'}]],],],{}])
                Format.push(['row',[
                                ['column',[
                                    ['column',[
                                        ['display-text','<h2>Infinity Points</h2>'],
                                        'blank',
                                        ['display-text','<h1>' + format(player.Infinity.Points)  + '</h1>'],],{'height':'90px','width':'350px','border':'3px white solid'}],
                                    ],{'width':'400px'}],
                                ['column',[
                                    ['column',[
                                        ['display-text','<h2>Number</h2>'],
                                        'blank',
                                        ['display-text','<h1>' + format(player.Number.Number) + '</h1>'],],{'height':'90px','width':'350px','border':'3px white solid'}],],{'width':'400px'}],],{}])
                Format.push(['row',[
                                ['column',[
                                    ['display-text','<h1 style="font-size:50px">↓</h1>'],],{'width':'350px','transform':'translate(-200px,0px)'}],],{'height':'60px'}])
                Format.push(['h-line','900px'])
                Format.push('blank','blank','blank')
                Format.push(['row',[
                                ['clickable',1],
                                ['column',,{'width':'18px'}],
                                ['clickable',2],
                                ['column',,{'width':'18px'}],
                                ['clickable',3],]])
                Format.push('blank')
                Format.push(['row',[
                                ['clickable',4],
                                ['column',,{'width':'18px'}],
                                ['column',,{'width':'175px'}],
                                ['column',,{'width':'18px'}],
                                ['clickable',6],]])
                Format.push('blank')
                Format.push(['row',[
                                ['clickable',7],
                                ['column',,{'width':'18px'}],
                                ['clickable',8],
                                ['column',,{'width':'18px'}],
                                ['clickable',9],]])

                
                

                return Format
            }
        },
    },

    microtabs:
    {

    },

    layerShown :  function()
    {
        return (player.Number.Stage>=3)
    },
    
    startData :  function()
    {    
        return{
        unlocked               : true,
		points                 : new Decimal(0),
        Stop                   : 0,

        Points                 : new Decimal(0),
        Points_Auto            : new Decimal(0),
        Points_Gain            : new Decimal(0),
        Next_Need              : new Decimal(0),
                                  // 0:PlaceHolder, 1.Level         2.Effect        3.Price         4.MaxLevel
        Infinity_Upgrades      : [0,[0,             new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0)],   // 1
                                    [0,             new Decimal(0), new Decimal(1), new Decimal(0), new Decimal(0)],   // 2
                                    [0,             new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0)],
                                    [0,             new Decimal(0), new Decimal(1), new Decimal(0), new Decimal(0)],
                                    [0,             new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0)],
                                    [0,             new Decimal(0), new Decimal(1), new Decimal(0), new Decimal(0)],
                                    [0,             new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0)],
                                    [0,             new Decimal(0), new Decimal(1), new Decimal(0), new Decimal(0)],
                                    [0,             new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0)],
                                    [0,             new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0)],], // 10

        Points_Gain            : '',
        Auto_Points_Gain       : new Decimal(0),
        Next_Text              : '',
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
        if(!player.Infinity.Stop)
        {
            if(player.Number.Stage == 3)
            {
                // Infinity Upgrades 函数 ---------------------------------------------------------------------------------------------------------------------
                player.Infinity.Infinity_Upgrades[1][4] = new Decimal(1)
                player.Infinity.Infinity_Upgrades[2][4] = new Decimal(-1)
                player.Infinity.Infinity_Upgrades[3][4] = new Decimal(1)
                player.Infinity.Infinity_Upgrades[4][4] = new Decimal(-1)
                player.Infinity.Infinity_Upgrades[5][4] = new Decimal(1)
                player.Infinity.Infinity_Upgrades[6][4] = new Decimal(-1)
                player.Infinity.Infinity_Upgrades[7][4] = new Decimal(1)
                player.Infinity.Infinity_Upgrades[8][4] = new Decimal(-1)
                player.Infinity.Infinity_Upgrades[9][4] = new Decimal(1)
                player.Infinity.Infinity_Upgrades[1][3] = new Decimal(12)
                player.Infinity.Infinity_Upgrades[2][2] = player.Infinity.Infinity_Upgrades[2][1].pow(0.9).mul(10).max(1).ceil()
                player.Infinity.Infinity_Upgrades[2][3] = new Decimal(1.05).pow(player.Infinity.Infinity_Upgrades[2][1]).mul(player.Infinity.Infinity_Upgrades[2][1].pow(2).div(5).add(1)).floor()
                player.Infinity.Infinity_Upgrades[3][3] = new Decimal(50)
                player.Infinity.Infinity_Upgrades[4][2] = new Decimal(1).div(new Decimal(0.002).mul(player.Infinity.Infinity_Upgrades[4][1].add(1/(9*0.002)))).mul(-1).add(10)
                player.Infinity.Infinity_Upgrades[4][3] = player.Infinity.Infinity_Upgrades[4][1].div(5).pow(1.25).add(2).floor()
                player.Infinity.Infinity_Upgrades[6][2] = player.Infinity.Infinity_Upgrades[6][1].add(1).pow(0.8)
                player.Infinity.Infinity_Upgrades[6][3] = player.Infinity.Infinity_Upgrades[6][1].add(1).pow(1.2).mul(2).floor()
                player.Infinity.Infinity_Upgrades[7][3] = new Decimal(3)
                player.Infinity.Infinity_Upgrades[8][2] = new Decimal(1.025).pow(player.Infinity.Infinity_Upgrades[8][1]).mul(new Decimal(0.9).pow(player.Infinity.Infinity_Upgrades[8][1].div(50)))
                player.Infinity.Infinity_Upgrades[8][3] = new Decimal(1.1).pow(player.Infinity.Infinity_Upgrades[8][1]).mul(player.Infinity.Infinity_Upgrades[8][1].pow(2).div(5).add(1)).floor()
                player.Infinity.Infinity_Upgrades[9][2] = player.Infinity.Points.add(1).pow(0.5)
                player.Infinity.Infinity_Upgrades[9][3] = new Decimal(25)
                
                

                // Infinity Points 函数 -----------------------------------------------------------------------------------------------------------------------
                player.Infinity.Points_Gain = player.Number.Number.log(new Decimal(1.79e308)).pow(2).floor()
                player.Infinity.Next_Need   = new Decimal(1.79e308).pow(player.Infinity.Points_Gain.add(1).pow(1/2))

                player.Infinity.Auto_Points_Gain = player.Infinity.Points_Gain.mul(0.01).mul(0.1)
                if(player.Infinity.Infinity_Upgrades[3][1].gte(1)) player.Infinity.Points = player.Infinity.Points.add(player.Infinity.Auto_Points_Gain.mul(diff))
            }
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

    },

    clickables :  (()=>
    {
        var Clickables = {}

        // Reset ----------------------------------------------------------------------------------------------------------------------------------------------
        Clickables['Reset'] = {}
        Clickables['Reset'].title = function()
        {
            return 'Reset your progress and gain<br><br><h2>' + format(player.Infinity.Points_Gain) + ' IP.'
        }
        Clickables['Reset'].canClick = function()
        {
            return player.Infinity.Points_Gain >= 1
        }
        Clickables['Reset'].onClick = function()
        {
            player.Infinity.Points = player.Infinity.Points.add(player.Infinity.Points_Gain)
            layerDataReset('Numerator')
            layerDataReset('Denominator')
            player.Number.Numerator = new Decimal(1)
            player.Number.Denominator = new Decimal(1)
            if(player.Infinity.Infinity_Upgrades[7][1].eq(1))
            {
                player.Numerator.Numerator_Bought_Mode = 2
                player.Denominator.Denominator_Bought_Mode = 1
            }
            
        }
        Clickables['Reset'].style = function()
        {
            Style = {}
            Style['height']         = '97px'
            Style['width']          = '350px'
            Style['border']         = '3px white solid'
            Style['border-radius']  = '20px'
            Style['color']          = 'white'
            if(!this.canClick())
            {
                Style['color']      = '#666666'
                Style['border']     = '3px #666666 solid'
            }
            return Style
        }

        // Upgrade[1~10] --------------------------------------------------------------------------------------------------------------------------------------
        for(var I=1; I<=10; I++)
        {
            Clickables[I] = {}
            Clickables[I].title = function()
            {
                switch(this.id-0)
                {
                    case 1: return 'Expansion'     ; break
                    case 2: return 'Multiples'     ; break
                    case 3: return 'Quality'       ; break
                    case 4: return 'Output'        ; break
                    case 6: return 'Iteration'     ; break
                    case 7: return 'Quantity'      ; break
                    case 8: return 'Exponents'     ; break
                    case 9: return 'Analyse'       ; break
                }
            }
            Clickables[I].canClick = function()
            {
                return     player.Infinity.Infinity_Upgrades[this.id][3].lte(player.Infinity.Points)
                       &&  (    player.Infinity.Infinity_Upgrades[this.id][4].eq(-1)
                            ||  (    player.Infinity.Infinity_Upgrades[this.id][4].gte(0)
                                 &&  player.Infinity.Infinity_Upgrades[this.id][1].lt(player.Infinity.Infinity_Upgrades[this.id][4])
                                )
                           )
            }
            Clickables[I].onClick = function()
            {
                player.Infinity.Points = player.Infinity.Points.sub(player.Infinity.Infinity_Upgrades[this.id][3])
                player.Infinity.Infinity_Upgrades[this.id][1] = player.Infinity.Infinity_Upgrades[this.id][1].add(1)
            }
            Clickables[I].display = function()
            {
                switch(this.id-0)
                {
                    case 1 :
                    {
                        var Description = '<h3>Unlock upgrades for Numer. and Deno.</h3>' 
                        var Price       = '<h2>' + format(player.Infinity.Infinity_Upgrades[1][3]) + ' IP.</h2>'
                        if(player.Infinity.Infinity_Upgrades[1][1].eq(1)) Price = '<h2>Complete</h2>'
                        return '<h3>------------------</h3><br>' + Description + '<br><h3>------------------</h3><br>' + Price
                    }; break
                    case 2 :
                    {
                        var Description = '<h3>Increase multiple of NI. and DD. gain</h3>' 
                        var Effect      = '<h2>×' + format(player.Infinity.Infinity_Upgrades[2][2]) + '</h2>'
                        var Price       = '<h2>' + format(player.Infinity.Infinity_Upgrades[2][3]) + ' IP.</h2>'
                        return '<h3>------------------</h3><br>' + Description + '<br><br>' + Effect + '<br><h3>------------------</h3><br>' + Price
                    }; break
                    case 3 :
                    {
                        var Description = '<h3>Gain 0.1% Reset IP. per second</h3>' 
                        var Effect      = '<h2>+' + format(player.Infinity.Auto_Points_Gain) + '/s</h2>'
                        var Price       = '<h2>' + format(player.Infinity.Infinity_Upgrades[3][3]) + ' IP.</h2>'
                        if(player.Infinity.Infinity_Upgrades[3][1].eq(1)) Price = '<h2>Complete</h2>'
                        return '<h3>------------------</h3><br>' + Description + '<br><br>' + Effect + '<br><h3>------------------</h3><br>' + Price
                    }; break
                    case 4 : 
                    {
                        var Description = '<h3>Increase percent of Imaginary Number Output in Deno.</h3>' 
                        var Effect      = '<h2>×' + format(player.Infinity.Infinity_Upgrades[4][2]) + '</h2>'
                        var Price       = '<h2>' + format(player.Infinity.Infinity_Upgrades[4][3]) + ' IP.</h2>'
                        return '<h3>------------------</h3><br>' + Description + '<br><br>' + Effect + '<br><h3>------------------</h3><br>' + Price
                    }; break
                    case 5 :
                    case 6 : 
                    {
                        var Description = '<h3>Reduce the price of Iterations in Nume.</h3>' 
                        var Effect      = '<h2>÷' + format(player.Infinity.Infinity_Upgrades[6][2]) + '</h2>'
                        var Price       = '<h2>' + format(player.Infinity.Infinity_Upgrades[6][3]) + ' IP.</h2>'
                        return '<h3>------------------</h3><br>' + Description + '<br><br>' + Effect + '<br><h3>------------------</h3><br>' + Price
                    }; break
                    case 7 :
                    {
                        var Description = '<h3>Unlock buy max for Numer. and Deno.</h3>' 
                        var Price       = '<h2>' + format(player.Infinity.Infinity_Upgrades[7][3]) + ' IP.</h2>'
                        if(player.Infinity.Infinity_Upgrades[7][1].eq(1)) Price = '<h2>Complete</h2>'
                        return '<h3>------------------</h3><br>' + Description + '<br><h3>------------------</h3><br>' + Price
                    }; break
                    case 8 :
                    {
                        var Description = '<h3>Increase exponent of NI. and DD. gain</h3>' 
                        var Effect      = '<h2>^' + format(player.Infinity.Infinity_Upgrades[8][2]) + '</h2>'
                        var Price       = '<h2>' + format(player.Infinity.Infinity_Upgrades[8][3]) + ' IP.</h2>'
                        return '<h3>------------------</h3><br>' + Description + '<br><br>' + Effect + '<br><h3>------------------</h3><br>' + Price
                    }; break
                    case 9 :
                    {
                        var Description = '<h3>IP. you have increase NE. and DE.</h3>' 
                        var Effect      = '<h2>×' + format(player.Infinity.Infinity_Upgrades[9][2]) + '</h2>'
                        var Price       = '<h2>' + format(player.Infinity.Infinity_Upgrades[9][3]) + ' IP.</h2>'
                        if(player.Infinity.Infinity_Upgrades[9][1].eq(1)) Price = '<h2>Complete</h2>'
                        return '<h3>------------------</h3><br>' + Description + '<br><br>' + Effect + '<br><h3>------------------</h3><br>' + Price
                    }; break
                    case 10: var Description = '' ; break
                }
            }
            Clickables[I].style = function()
            {
                var Style = {}
                Style['width']                = '175px'
                Style['height']               = '175px'
                Style['border']               = '3px solid white'
                Style['border-radius']        = '5px'
                Style['color']                = 'white'
                Style['background-color']     = 'black'
                if(!this.canClick())
                {
                    Style['border']           = '3px solid #666666'
                    Style['color']            = '#666666'
                }
                if(player.Infinity.Infinity_Upgrades[this.id][4].eq(player.Infinity.Infinity_Upgrades[this.id][1]))
                {
                    Style['border']           = '3px solid white'
                    Style['color']            = 'white'
                    Style['background-color'] = 'DarkGreen'
                }
                return Style
            }
        }
        Clickables[6].tooltip = 'Addition<br>----------------------<br>The effect of this upgrade will decrease as the number of iteration layers increases.<br><br>For instance: <br>50% for Iteration 2, 33% for Iteration 3, etc.'
    
        return Clickables
    })()
})