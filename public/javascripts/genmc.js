var genMC = {
    g: [
        [1, 6], [2, 6], [3, 6], [4, 6],
        [0, 5], [4, 5],
        [0, 4], [4, 4],
        [0, 3], [4, 3],
        [1, 2], [2, 2], [3, 2], [4, 2],
        [4, 1],
        [2, 0], [3, 0]
    ],
    e: [
        [7, 6], [8, 6], [9, 6],
        [6, 5], [10, 5],
        [6, 4], [7, 4], [8, 4], [9, 4], [10, 4],
        [6, 3],
        [7, 2], [8, 2], [9, 2], [10, 2]
    ],
    n: [
        [12, 6], [13, 6], [14, 6], [15, 6],
        [12, 5], [16, 5],
        [12, 4], [16, 4],
        [12, 3], [16, 3],
        [12, 2], [16, 2]
    ],
    M: [
        [18, 8], [24, 8],
        [18, 7], [19, 7], [23, 7], [24, 7],
        [18, 6], [20, 6], [22, 6], [24, 6],
        [18, 5], [21, 5], [24, 5],
        [18, 4], [24, 4],
        [18, 3], [24, 3],
        [18, 2], [24, 2]
    ],
    C: [
        [27, 8], [28, 8], [29, 8],
        [26, 7], [30, 7],
        [26, 6],
        [26, 5],
        [26, 4],
        [26, 3], [30, 3],
        [27, 2], [28, 2], [29, 2]
    ],

    // thanks Dustycraft!
    images: [
        "sprite_apple_golden",
        "sprite_bedrock",
        "sprite_cactus_side",
        "sprite_crafting_table_top",
        "sprite_diamond_ore",
        "sprite_diamond_pickaxe",
        "sprite_ender_pearl",
        "sprite_ghast_tear",
        "sprite_log_oak",
        "sprite_mob_spawner",
        "sprite_mycelium_top",
        "sprite_nether_star",
        "sprite_porkchop_raw",
        "sprite_pumpkin_face_on",
        "sprite_repeater",
        "sprite_skull_creeper",
        "sprite_skull_steve",
        "sprite_stone_sword",
        "sprite_tnt_side",
        "sprite_wheat"
    ],
    
    draw: function(letter, image) {
        for (var i = 0; i < letter.length; i++) {
            var x = letter[i][0];
            var y = letter[i][1];
            var id = 'x' + x + 'y' + y;
            $("#" + id).removeClass(this.images.join(' ') + ' sprite_seethrough').addClass(image);
        }
    },

    draw_letters: function(image_source) {
        var act = this.cur_image++;
        _([this.g, this.e, this.n, this.M, this.C]).each(_.bind(function(letter) {
            this.draw(letter, image_source(act++));
        }, this));
    },

    cur_image: 0,
    cycling: false,
    seconds_per_cycle: 1,
    scale: 'large',

    image_by_position: function(pos) {
        return this.images[pos % this.images.length]
    },

    clear_logo: function() {
        this.cycling = false;
        this.draw_letters(function(_) { return 'sprite_seethrough'; });
    },

    default_logo: function() {
        this.cycling = false;
        this.draw_letters(function(_) { return 'sprite_bedrock'; });
    },

    spin: function() {
        if (this.cycling === true) {
            this.draw_letters(_.bind(this.image_by_position, this));

            _.delay(_.bind(this.spin, this),
                    this.seconds_per_cycle * 1000);
        }
    },

    cycle_logo: function() {
        this.cycling = true;
        this.images = _.shuffle(this.images)
        this.spin();
    },

    small_logo: function() {
        this.scale = 'small';
        $("#logo td").removeClass('large').addClass('small');
    },

    big_logo: function() {
        this.scale = 'large';
        $("#logo td").removeClass('small').addClass('large');
    },
};
