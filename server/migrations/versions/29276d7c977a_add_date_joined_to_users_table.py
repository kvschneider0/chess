"""add date_joined to users table

Revision ID: 29276d7c977a
Revises: 7d863ef15f82
Create Date: 2023-04-05 10:12:00.399118

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '29276d7c977a'
down_revision = '7d863ef15f82'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.add_column(sa.Column('date_joined', sa.DateTime(), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.drop_column('date_joined')

    # ### end Alembic commands ###
