import os
from psycopg_pool import ConnectionPool


pool = ConnectionPool(conninfo=os.environ["DATABASE_URL"])

class QuestionsQueries:


    def get_question(self, id):
            with pool.connection() as conn:
                with conn.cursor() as cur:
                    cur.execute(
                        """
                        SELECT id, question, answer, option_1,
                            option_2, option_3
                        FROM questions
                        WHERE id = %s
                    """,
                        [id],
                    )

                    record = None
                    row = cur.fetchone()
                    if row is not None:
                        record = {}
                        for i, column in enumerate(cur.description):
                            record[column.name] = row[i]

                    return record
