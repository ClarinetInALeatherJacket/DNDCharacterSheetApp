import filesystem from "fs";
import JSON from "JSON";

class character {
    name;
    level;
    class;
    health;

    str;
    dex;
    con;
    wis;
    int;
    cha;

    str_mod;
    dex_mod;
    con_mod;
    wis_mod;
    int_mod;
    cha_mod;

    str_save;
    dex_save;
    con_save;
    int_save;
    wis_save;
    cha_save;

    prof_bonus;

    athletics;
    acrobatics;
    sleight_of_hand;
    stealth;
    arcana;
    history;
    investigation;
    nature;
    religion;
    animal_handling;
    insight;
    medicine;
    perception;
    survival;
    deception;
    intimidation;
    performance;
    persuasion;

    passive_perception;

    initiative;

    spellcasting_ability;
    spell_attack_bonus;
    spell_save_dc;
    constructor(name){

        let char_file = filesystem.readFileSync("./character.json", "utf-8")
        let char_list = JSON.parse(char_file);
        let char = char_list[char_list.findIndex(x => x.name === name)];

        this.name = char.name;
        this.level = char.level;
        this.class = char.class;
        this.health = char.health;

        this.str = char.stats.str;
        this.dex = char.stats.dex;
        this.con = char.stats.con;
        this.wis = char.stats.wis;
        this.int = char.stats.int;
        this.cha = char.stats.cha;

        // Calculate proficiency bonus
        this.prof_bonus = Math.ceil(char.level / 4) + 1;

        // Calculate stat modifiers
        this.str_mod = Math.floor((char.stats.str - 10) / 2);
        this.dex_mod = Math.floor((char.stats.dex - 10) / 2);
        this.con_mod = Math.floor((char.stats.con - 10) / 2);
        this.wis_mod = Math.floor((char.stats.wis - 10) / 2);
        this.int_mod = Math.floor((char.stats.int - 10) / 2);
        this.cha_mod = Math.floor((char.stats.cha - 10) / 2);

        // Calculate saving throws
        this.str_save = this.str_mod + (char.saving_throw_prof.str * this.prof_bonus);
        this.dex_save = this.dex_mod + (char.saving_throw_prof.dex * this.prof_bonus);
        this.con_save = this.con_mod + (char.saving_throw_prof.con * this.prof_bonus);
        this.int_save = this.int_mod + (char.saving_throw_prof.int * this.prof_bonus);
        this.wis_save = this.is_mod + (char.saving_throw_prof.wis * this.prof_bonus);
        this.cha_save = this.cha_mod + (char.saving_throw_prof.cha * this.prof_bonus);

// Calculate skill modifiers
        this.athletics = str_mod + (char.expertise_value.athletics * prof_bonus);

        this.acrobatics = dex_mod + (char.expertise_value.acrobatics * prof_bonus);
        this.sleight_of_hand = dex_mod + (char.expertise_value.sleight_of_hand * prof_bonus);
        this.stealth = dex_mod + (char.expertise_value.stealth * prof_bonus);

        this.arcana = int_mod + (char.expertise_value.arcana * prof_bonus);
        this.history = int_mod + (char.expertise_value.history * prof_bonus);
        this.investigation = int_mod + (char.expertise_value.investigation * prof_bonus);
        this.nature = int_mod + (char.expertise_value.nature * prof_bonus);
        this.religion = int_mod + (char.expertise_value.religion * prof_bonus);

        this.animal_handling = wis_mod + (char.expertise_value.animal_handling * prof_bonus);
        this.insight = wis_mod + (char.expertise_value.insight * prof_bonus);
        this.medicine = wis_mod + (char.expertise_value.medicine * prof_bonus);
        this.perception = wis_mod + (char.expertise_value.perception * prof_bonus);
        this.survival = wis_mod + (char.expertise_value.survival * prof_bonus);

        this.deception = cha_mod + (char.expertise_value.deception * prof_bonus);
        this.intimidation = cha_mod + (char.expertise_value.intimidation * prof_bonus);
        this.performance = cha_mod + (char.expertise_value.performance * prof_bonus);
        this.persuasion = cha_mod + (char.expertise_value.persuasion * prof_bonus);

        // Calculate passive perception
        this.passive_perception = 10 + perception;

        // Calculate initiative
        this.initiative = dex_mod;

        // Set spell casting ability
        this.spellcasting_ability = char.casting[0];

        // Calculate spell save DC and spell attack bonus
        this.spell_attack_bonus = this.prof_bonus;
        this.spell_save_dc = 8 + this.prof_bonus;

        if (this.spellcasting_ability === "int") {
            this.spell_save_dc += this.int_mod;
            this.spell_attack_bonus += this.int_mod;

        } else if (this.spellcasting_ability === "wis") {
            this.spell_save_dc += this.wis_mod;
            this.spell_attack_bonus += this.wis_mod;

        } else if (this.spellcasting_ability === "cha") {
            this.spell_save_dc += this.cha_mod;
            this.spell_attack_bonus += this.cha_mod;

        } else {
            this.spell_save_dc = 0;
            this.spell_attack_bonus = 0;
        }

    }

    toJSON() {
        //TODO: implement toJSON
        //Some other way to do this? Make class such that toJSON is just stringify
    }
}


export default character;