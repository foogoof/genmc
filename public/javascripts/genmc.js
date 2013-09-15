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

    images: [
        'images/candidates/mycelium_top.png',
        'images/candidates/tnt_side.png',
        'images/candidates/porkchop_raw.png',
        'images/candidates/skull_steve.png',
        'images/candidates/repeater.png',
        'images/candidates/mob_spawner.png',
        'images/candidates/log_oak.png',
        'images/candidates/skull_creeper.png',
        'images/candidates/ender_pearl.png',
        'images/candidates/ghast_tear.png',
        'images/candidates/apple_golden.png',
        'images/candidates/bedrock.png',
        'images/candidates/diamond_ore.png',
        'images/candidates/cactus_side.png',
        'images/candidates/crafting_table_top.png',
        'images/candidates/pumpkin_face_on.png',
        'images/candidates/nether_star.png',
        'images/candidates/diamond_pickaxe.png',
    ],
    
    draw: function(letter, image) {
        for (var i = 0; i < letter.length; i++) {
            var x = letter[i][0];
            var y = letter[i][1];
            var id = 'x' + x + 'y' + y;
            $("#" + id).html($("<img src='" + image + "'></img>"));
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

    image_by_position: function(pos) {
        if (pos % this.images.length === 0) {
            this.images = _.shuffle(this.images)
        }

        return this.images[pos % this.images.length]
    },

    clear_logo: function() {
        this.cycling = false;
        this.draw_letters(function(_) { return 'images/clear.png'; });
    },

    default_logo: function() {
        this.cycling = false;
        this.draw_letters(function(_) { return 'images/candidates/bedrock.png'; });
    },

    default_seconds_per_cycle: 1,

    spin: function() {
        if (this.cycling === true) {
            this.draw_letters(_.bind(this.image_by_position, this));

            _.delay(_.bind(this.spin, this),
                    this.default_seconds_per_cycle * 1000);
        }
    },

    cycle_logo: function() {
        this.cycling = true;
        this.spin();
    },

    small_logo: function() {
    },
};

