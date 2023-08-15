import { parsePropertiesStringToJson } from '../parsePropertiesFileToJson'; // Importar la función actualizada
import { PropertiesFile } from "../types/PropertiesFile";
import { join } from "path";

test("Parsed properties content should match expected object", () => {
    const expected: PropertiesFile = {
        "broadcast-rcon-to-ops": true,
        "view-distance": 10,
        "max-build-height": 256
    };

    // Simular el contenido del archivo original
    const initialPropertiesContent = `broadcast-rcon-to-ops=true\nview-distance=10\nmax-build-height=256`;
    const parsedPropertiesFile = parsePropertiesStringToJson(initialPropertiesContent, join(__dirname, "./../test_data/server.properties"));

    expect(parsedPropertiesFile).toMatchObject(expected);
});

test("Parsed properties content should match expected object with one null value", () => {
    const expected: PropertiesFile = {
        "broadcast-rcon-to-ops": true,
        "view-distance": 10,
        "max-build-height": null
    };

    // Simular el contenido del archivo con valor nulo
    const nullValuePropertiesContent = `broadcast-rcon-to-ops=true\nview-distance=10\nmax-build-height=`;
    const parsedPropertiesFile = parsePropertiesStringToJson(nullValuePropertiesContent, join(__dirname, "./../test_data/server.properties"));

    expect(parsedPropertiesFile).toMatchObject(expected);
});
