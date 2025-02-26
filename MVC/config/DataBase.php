<?php

class DataBase {
    private static $instance = null;
    private $db;

    private function __construct($dataBaseName) {
        $dsn = 'mysql:host=localhost;dbname=' . $dataBaseName;
        $username = 'root';
        $password = '';
        
        try {
            $this->db = new PDO($dsn, $username, $password);
            $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            die ('Connection failed' . $e->getMessage());
        }
    }

    public static function getInstance($dataBaseName) {
        if (!self::$instance) {
            self::$instance = new DataBase($dataBaseName);
        }
        return self::$instance->db;
    }
}

?>